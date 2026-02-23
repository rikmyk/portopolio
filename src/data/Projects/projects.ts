import { Project } from './project';

export const projects: Project[] = [
     {
          name: 'Kalkulator Web',
          category: 'Website',
          desc: 'Dicoding Web Front-End for Beginners',
          link: {
            demo: 'https://kalkulator-web.vercel.app/',
            github: 'https://github.com/rikmyk/kalkulator-web',
          },
          tech: ['HTML', 'CSS', 'JavaScript'],
     },
     {
          name: 'To Do List',
          category: 'Website',
          desc: 'Simple Todo List App with Local and Session Storage',
          link: {
            demo: 'https://todo-list-rikmyk.vercel.app/',
            github: 'https://github.com/rikmyk/TodoList',
          },
          tech: ['HTML', 'CSS', 'JavaScript'],
  },
     {
          name: 'Bookself API',
          category: 'API',
          desc: 'Bookself API useing postman',
          link: {
            github: 'https://github.com/rikmyk/bookself-api',
            demo: '-',
          },
          tech: ['JavaScript', 'Node.js'],
  },
  {
    name: 'Custom Discord Transaction Bot',
    category: 'Bot',
    desc: 'Developed a custom Discord bot to facilitate secure and structured transactions for buying and selling Roblox items and Robux. Implemented advanced features including automated transaction transcripts, chat history logging for audit purposes, and dynamic Robux-to-currency price conversion. Designed the system to improve transaction transparency, minimize disputes, and enhance operational efficiency within the community marketplace.',
    link: {
      demo: null,
      github: null,
    },
    tech: ['TypeScript', 'Node.js'],
    preview: [
      '/images/projects/richbloxbot/richbloxprev1.png',
      '/images/projects/richbloxbot/richbloxprev2.png',
      '/images/projects/richbloxbot/richbloxprev3.png',
      '/images/projects/richbloxbot/richbloxprev4.png',
      '/images/projects/richbloxbot/richbloxprev5.png',
      '/images/projects/richbloxbot/richbloxprev6.png',
      '/images/projects/richbloxbot/richbloxprev7.png',
      '/images/projects/richbloxbot/richbloxprev8.png',
      '/images/projects/richbloxbot/richbloxprev9.png',
      '/images/projects/richbloxbot/richbloxprev10.png ',
    ],
  },
  {
    name: 'BECdex.com',
    category: 'Website',
    desc: 'A private web platform with full Xendit payment gateway integration. Built a complete payment flow including invoice generation, payment status callback handling, and transaction history. The site features a responsive UI and structured backend to support seamless digital transactions.',
    link: {
      demo: null,
      github: null,
    },
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    preview: [
      '/images/projects/becdex.com/prev1.png',
      '/images/projects/becdex.com/prev2.png',
      '/images/projects/becdex.com/prev3.png',
      '/images/projects/becdex.com/prev4.png',
      '/images/projects/becdex.com/prev5.png',
      '/images/projects/becdex.com/prev6.png',
      '/images/projects/becdex.com/prev7.png',
    ],
  },
];
