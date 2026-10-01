// lucide-react exports individual components, but our data files store icon
// names as strings so they stay plain-data. This maps a name to its icon.
//
// Note: react-icons components must be imported under their full exported name
// (FaGamepad, not Gamepad). Importing the bare name fails the production build.

import {
  Bot,
  Code,
  Database,
  Search,
  Smartphone,
  Workflow
} from 'lucide-react';

import {
  FaFileAudio,
  FaTrophy,
  FaGamepad
} from 'react-icons/fa';

import { SiN8N } from 'react-icons/si';

const registry = {
  // projects
  Workflow,
  Search,
  Database,
  Bot,
  Smartphone,
  // experience
  AudioLines: FaFileAudio,
  Code,
  Trophy: FaTrophy,
  SiN8N,
  FaGamepad
};

export function icon(name, size = 20) {
  const Component = registry[name];
  if (!Component) return null;
  return <Component size={size} />;
}