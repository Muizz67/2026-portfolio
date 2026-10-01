// Brand logos for the technical stack, rendered in their official brand colors.
// Keys match the `icon` field in src/data/profile.js technicalStack.

import {
  SiPython,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiYolo,
  SiSelenium,
  SiHuggingface,
  SiLaravel,
  SiVuedotjs,
  SiNodedotjs,
  SiJavascript,
  SiPhp,
  SiN8N,
  SiOllama,
  SiCloudflare,
  SiGooglesheets,
  SiDocker,
  SiGit,
  SiObsidian,
  SiCplusplus
} from 'react-icons/si';

import {
  FaDatabase,
  FaRobot,
  FaHashtag,
  FaCubes
} from 'react-icons/fa';

// Simple Icons ships monochrome glyphs, so each entry carries its brand hex.
// `tint` renders the glyph in brand color instead of the inherited text color.
const registry = {
  python: { Icon: SiPython, tint: '#3776AB' },
  tensorflow: { Icon: SiTensorflow, tint: '#FF6F00' },
  sklearn: { Icon: SiScikitlearn, tint: '#F7931E' },
  pandas: { Icon: SiPandas, tint: '#150458' },
  yolo: { Icon: SiYolo, tint: '#111111' },
  selenium: { Icon: SiSelenium, tint: '#43B02A' },
  huggingface: { Icon: SiHuggingface, tint: '#FFD21E' },
  labelstudio: { Icon: FaCubes, tint: '#FFA61E' },
  laravel: { Icon: SiLaravel, tint: '#FF2D20' },
  vue: { Icon: SiVuedotjs, tint: '#4FC08D' },
  node: { Icon: SiNodedotjs, tint: '#539E43' },
  javascript: { Icon: SiJavascript, tint: '#F7DF1E' },
  php: { Icon: SiPhp, tint: '#777BB4' },
  n8n: { Icon: SiN8N, tint: '#EA4B71' },
  openai: { Icon: SiOllama, tint: '#10A37F' },
  cloudflare: { Icon: SiCloudflare, tint: '#F38020' },
  googlesheets: { Icon: SiGooglesheets, tint: '#0F9D58' },
  docker: { Icon: SiDocker, tint: '#2496ED' },
  git: { Icon: SiGit, tint: '#F05032' },
  obsidian: { Icon: SiObsidian, tint: '#7C3AED' },
  sql: { Icon: FaDatabase, tint: '#A78BFA' },
  java: { Icon: FaHashtag, tint: '#ED8B00' },
  cpp: { Icon: SiCplusplus, tint: '#00599C' }
};

export function techIcon(key, size = 22) {
  const entry = registry[key];
  if (!entry) return null;
  const { Icon, tint } = entry;
  return <Icon size={size} style={{ color: tint }} />;
}