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

// Vercel runs Node 24 (engines: node 24.x) and no longer offers Node 18.
// The openssl-legacy-provider flag is supported on Node < 23 and Node >= 24
// (verified on Node 26). Node 23 is the only modern release that does NOT
// support it, so we never pass it there.
const usesLegacyProvider = nodeMajor !== 23;

// Build args and environment. When legacy provider is supported, pre-set the
// flag so the OpenSSL-3 md4 hashing works on the single first pass - no
// duplicate build run needed. NODE_OPTIONS is set fresh (not appended) so it
// is not duplicated if it is already in the environment.
const args = ['react-scripts', 'build'];
const env = { ...process.env };
if (usesLegacyProvider) {
  env.NODE_OPTIONS = '--openssl-legacy-provider';
}

console.log('[build] Node ' + process.versions.node + ' detected');

const first = run(args, env);

if (first.status === 0) {
  process.exit(0);
}

// Only the OpenSSL/md4 failure warrants the legacy provider.
const output = (first.stdout || '') + (first.stderr || '');
const isOpenSslError = /digital envelope routines|0308010C|openssl-legacy-provider/i.test(
  output
);

if (!isOpenSslError) {
  console.error('[build] Build failed.');
  if (first.stderr) console.error(first.stderr);
  if (first.stdout) console.error(first.stdout);
  process.exit(first.status ?? 1);
}

if (!usesLegacyProvider) {
  console.error('[build] Build failed. --openssl-legacy-provider is not supported on Node 23.');
  process.exit(first.status ?? 1);
}

console.warn('[build] OpenSSL 3 incompatibility detected (Node ' + nodeMajor + '). Using --openssl-legacy-provider.');

process.exit(first.status ?? 1);