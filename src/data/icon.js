// lucide-react exports as individual components, but our data files store
// icon names as strings so they stay plain-data. This maps a name to its icon.

import {
  Award,
  Bot,
  Briefcase,
  Cloud,
  Code,
  Cpu,
  Database,
  Layers,
  Search,
  Server,
  Smartphone,
  Terminal,
  Workflow
} from 'lucide-react';

const registry = {
  Award,
  Bot,
  Briefcase,
  Cloud,
  Code,
  Cpu,
  Database,
  Layers,
  Search,
  Server,
  Smartphone,
  Terminal,
  Workflow
};

export function icon(name, size = 20) {
  const Component = registry[name];
  if (!Component) return null;
  return <Component size={size} />;
}