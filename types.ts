import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  items: string[];
  icon: LucideIcon;
  image: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ProjectHighlight {
  text: string;
}

export interface GrowthGoal {
  period: string;
  title: string;
  description: string;
  icon: LucideIcon;
}