import { FiFolder, FiHome, FiMail, FiUser, FiZap } from 'react-icons/fi';

import { HeaderItem } from './headerItem.d';

export const headerItems: HeaderItem[] = [
  {
    label: 'Home',
    link: '/',
    icon: FiHome,
  },
  {
    label: 'About',
    link: '/about',
    icon: FiUser,
  },
  {
    label: 'Skills',
    link: '/skills',
    icon: FiZap,
  },
  {
    label: 'Projects',
    link: '/projects',
    icon: FiFolder,
  },
  {
    label: 'Contact',
    link: '/contact',
    icon: FiMail,
  },
];
