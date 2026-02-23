import { IWorkExperience } from './workExperience.d';

export const workExperience: IWorkExperience[] = [
  {
    name: 'Freelance — Developer',
    type: 'Freelance',
    timePeriod: '2023 - present',
    tasks: [
      'Developed custom Discord bots for private clients (moderation, role management, transaction & middleman systems with payment integration)',
      'Built web landing pages and simple websites tailored to client needs',
      'Set up and configured servers (VPS/Linux) including deployment, domain, and environment setup',
      'Maintained and updated projects post-delivery based on client feedback',
    ],
  },
  {
    name: 'Kementerian Ketenagakerjaan Republik Indonesia (Kemenaker)',
    type: 'Internship',
    timePeriod: 'October 2025 - present',
    tasks: [
      'Joined the Fresh Graduate Internship Program (Program Magang Lulusan Baru) under Kemenaker RI',
      'Worked as a Semi Full Stack Developer with a stronger focus on front-end development',
      'Integrated Google API services into the application',
      'Implemented full payment gateway integration using Xendit',
      'Built and maintained responsive UI across various screen sizes and devices',
    ],
  },
];
