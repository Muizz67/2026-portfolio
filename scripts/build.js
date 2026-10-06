/**
 * Cross-platform wrapper around `react-scripts build`.
 *
 * Why this exists: react-scripts 5 bundles webpack 4, whose md4 hashing breaks
 * under OpenSSL 3 (Node 17+). Cloudflare Pages builds on Node 18, so a plain
 * `npm run build` there fails with:
 *
 *   error:0308010C:digital envelope routines::unsupported
 *
 * The usual fix is NODE_OPTIONS=--openssl-legacy-provider. Vercel no longer
 * offers Node 18 (it now runs Node 24+), and the flag is safe on Node 24+,
 * so the wrapper retries with it on any modern Node that fails the first
 * build with the OpenSSL error.
 */

const { spawnSync } = require('child_process');

function run(args, env) {
  return spawnSync('npx', args, {
    stdio: 'inherit',
    env: { ...process.env, ...env },
    shell: process.platform === 'win32'
  });
}

// Major version, e.g. 18 for Node 18.x and 26 for Node 26.7.0.
const nodeMajor = Number(process.versions.node.split('.')[0]);

console.log(`[build] Node ${process.versions.node} detected`);

const first = run(['react-scripts', 'build']);

if (first.status === 0) {
  process.exit(0);
}

// Only the OpenSSL/md4 failure warrants the legacy provider, and only on
// versions that still support it.
const output = (first.stdout || '') + (first.stderr || '');
const isOpenSslError = /digital envelope routines|0308010C|openssl-legacy-provider/i.test(
  output
);

if (!isOpenSslError) {
  console.error('[build] Build failed. Re-running with no legacy-provider flag.');
  process.exit(first.status ?? 1);
}

console.warn(
  `[build] OpenSSL 3 incompatibility detected (Node ${nodeMajor}). ` +
    'Retrying with --openssl-legacy-provider.'
);

const retry = run(['react-scripts', 'build'], {
  NODE_OPTIONS: `${process.env.NODE_OPTIONS || ''} --openssl-legacy-provider`.trim()
});

process.exit(retry.status ?? 1);