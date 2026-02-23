import { skills } from '../Skills/skills';
import { projectCategories } from './projectCategories';

export interface Project {
  name: string;
  category: typeof projectCategories[number];
  desc: string;
  tech: typeof skills[number]['name'][];
  link: {
    demo: string | null;
    github: string | null;
  };
  preview?: string[]; // array of image paths for private projects
}
