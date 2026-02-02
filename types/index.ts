export type Page = 'home' | 'about' | 'experience' | 'skills' | 'education' | 'contact' | 'exp-detail';
export type Theme = 'light' | 'dark';

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  logo: string;
  period: string;
  desc: string;
  longDesc: string;
  items: string[];
  tech: string[];
  color: 'blue' | 'purple' | 'red' | 'google';
  link: string;
}