// lucide-react exports individual components, but our data files store icon
// names as strings so they stay plain-data. This maps a name to its icon.
//
// Note: react-icons components must be imported under their full exported name
// (FaRobot, not Robot). Importing the bare name fails the production build.

import {
  Award,
  Bot,
  Brain,
  Code,
  Database,
  Search,
  Smartphone,
  Workflow
} from 'lucide-react';

import {
  FaFileAudio,
  FaRobot,
  FaMicrochip,
  FaLightbulb,
  FaTrophy
} from 'react-icons/fa';

import { SiN8N, SiEricsson } from 'react-icons/si';

const registry = {
  // projects
  Workflow,
  Search,
  Database,
  Bot,
  Smartphone,
  // experience
  AudioLines: FaFileAudio,
  Robot: FaRobot,
  Code,
  Trophy: FaTrophy,
  // certifications
  Award,
  Brain,
  Lightbulb: FaLightbulb,
  Microchip: FaMicrochip,
  TowerBroadcast: SiEricsson,
  SiN8N
};

export function icon(name, size = 20) {
  const Component = registry[name];
  if (!Component) return null;
  return <Component size={size} />;
}