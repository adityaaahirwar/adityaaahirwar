import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'dev' | 'ads' | 'design';
}

export interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  link?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface NavItem {
  label: string;
  href: string;
}