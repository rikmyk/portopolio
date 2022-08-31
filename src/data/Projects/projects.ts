import { Project } from './project';

export const projects: Project[] = [
  {
    name: 'Portfolio Website v3',
    category: 'Website',
    desc: 'Third revision of my portfolio website',
    link: {
      demo: '',
      github: 'https://github.com/tfkhdyt/web-portfolio-v3/',
    },
    tech: ['TypeScript', 'Next.js', 'Mantine', 'Framer Motion', 'Jotai'],
  },
  {
    name: 'Todo List',
    category: 'Website',
    desc: 'Simple Todo List App with Authentication',
    link: {
      demo: 'http://tfkhdyt-todo-list.vercel.app/',
      github: 'https://github.com/tfkhdyt/todo-prisma',
    },
    tech: ['TypeScript', 'Next.js', 'Mantine', 'Prisma', 'NextAuth'],
  },
  {
    name: 'Gatotkaca',
    category: 'Website',
    desc: 'Metaseach-engine, based on SearXNG',
    link: {
      demo: 'https://gatotkaca.tfkhdyt.my.id',
      github: 'https://github.com/tfkhdyt/gatotkaca',
    },
    tech: ['Python'],
  },
  {
    name: 'Full Stack Roadmap',
    category: 'Website',
    desc: 'Roadmap to become a Full Stack Developer',
    link: {
      demo: 'https://roadmap.tfkhdyt.my.id',
      github: 'https://github.com/tfkhdyt/full-stack-roadmap',
    },
    tech: [
      'TypeScript',
      'Next.js',
      'NestJS',
      'Tailwind CSS',
      'MongoDB',
      'Framer Motion',
    ],
  },
  {
    name: 'Portfolio Website v2',
    category: 'Website',
    desc: 'Second revision of my portfolio website',
    link: {
      demo: 'https://tfkhdyt.my.id',
      github: 'https://github.com/tfkhdyt/web-portfolio',
    },
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS', 'daisyUI', 'Framer Motion'],
  },
  {
    name: 'WhatsApp Status Trimmer - Go',
    category: 'CLI',
    desc: 'Golang port of whatsapp-status-trimmer (Node.js)',
    link: {
      github: 'https://github.com/tfkhdyt/wast-go',
      demo: null,
    },
    tech: ['Go'],
  },
  {
    name: 'dotfiles',
    category: 'Misc',
    desc: 'My Linux desktop dotfiles',
    link: {
      github: 'https://github.com/tfkhdyt/dotfiles',
      demo: null,
    },
    tech: ['GNU/Linux'],
  },
  {
    name: 'Bookstore',
    category: 'Website',
    desc: 'Books management app',
    link: {
      github: 'https://github.com/tfkhdyt/bookstore',
      demo: 'https://bookstore.tfkhdyt.my.id/',
    },
    tech: [
      'TypeScript',
      'Next.js',
      'Mantine',
      'Go',
      'Gin',
      'PostgreSQL',
      'Framer Motion',
      'Zustand',
    ],
  },
  {
    name: 'VSGA JWD',
    category: 'Misc',
    desc: 'All my tasks during the VSGA Junior Web Developer certification program from BPPTIK',
    link: {
      github: 'https://github.com/tfkhdyt/vsga-jwd',
      demo: null,
    },
    tech: ['PHP', 'Tailwind CSS'],
  },
  {
    name: 'Message Form to Telegram API',
    category: 'API',
    desc: 'REST API to send message from HTML form into Telegram Messages',
    link: {
      github: 'https://github.com/tfkhdyt/message-form-to-telegram-api',
      demo: null,
    },
    tech: ['TypeScript', 'NestJS', 'Telegraf'],
  },
  {
    name: 'POPOWI',
    category: 'Website',
    desc: 'Popcat.click clone with Jokowi as the character',
    link: {
      github: 'https://github.com/tfkhdyt/popclick',
      demo: null,
    },
    tech: ['JavaScript', 'React', 'Bootstrap'],
  },
  {
    name: 'LAM Final Project',
    category: 'Website',
    desc: 'Web app to solve some linear algebra and matrices problems',
    link: {
      github: 'https://github.com/tfkhdyt/tugas-akhir-aljabar-linier-matriks',
      demo: 'https://aljabar-linier-matriks-kelompok-2.vercel.app/',
    },
    tech: ['JavaScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
  },
  {
    name: 'IDCamp2022',
    category: 'Misc',
    desc: 'All my tasks during the IDCamp 2022',
    link: {
      github: 'https://github.com/tfkhdyt/IDCamp2022',
      demo: null,
    },
    tech: ['JavaScript'],
  },
  {
    name: 'Random Quote Generator',
    category: 'Website',
    desc: 'A web app that will generate a random quote for you',
    link: {
      github: 'https://github.com/tfkhdyt/random-quote-generator',
      demo: 'https://quotes.tfkhdyt.my.id/',
    },
    tech: ['TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    name: 'Translate Bot',
    category: 'Bot',
    desc: 'Google Translate on Telegram Bot',
    link: {
      github: 'https://github.com/tfkhdyt/translate-bot',
      demo: 'https://t.me/tfkhdyt_translate_bot',
    },
    tech: ['TypeScript', 'Node.js', 'Telegraf'],
  },
  {
    name: 'WhatsApp Status Trimmer',
    category: 'CLI',
    desc: 'Simple Node.js script to trim and split a video into 30s videos for WhatsApp Status',
    link: {
      github: 'https://github.com/tfkhdyt/whatsapp-status-trimmer',
      demo: null,
    },
    tech: ['TypeScript', 'Node.js'],
  },
  {
    name: '21Cineplex API',
    category: 'API',
    desc: 'Cinema XXI REST API using Web Scraping Method with NestJS, TypeScript, and Cheerio',
    link: {
      github: 'https://github.com/tfkhdyt/21cineplex-api',
      demo: 'https://tfkhdyt-21cineplex-api.herokuapp.com/docs/',
    },
    tech: ['TypeScript', 'NestJS'],
  },
  {
    name: 'KBBI Bot',
    category: 'Bot',
    desc: 'Indonesian Dictionary in Telegram using web scraping method',
    link: {
      github: 'https://github.com/tfkhdyt/kbbi-bot',
      demo: 'https://t.me/tfkhdyt_kbbi_bot',
    },
    tech: ['TypeScript', 'Node.js', 'Telegraf'],
  },
  {
    name: 'Portfolio Website',
    category: 'Website',
    desc: 'My old portfolio website',
    link: {
      github: 'https://github.com/tfkhdyt/tfkhdyt-portfolio',
      demo: 'https://tfkhdyt.web.app',
    },
    tech: ['JavaScript', 'Bootstrap'],
  },
  {
    name: 'College Assignments',
    category: 'Misc',
    desc: 'All of my college assignments',
    link: {
      github: 'https://github.com/tfkhdyt/tugas-kuliah',
      demo: null,
    },
    tech: ['Java', 'C++', 'PHP'],
  },
  {
    name: 'Bayarcoek',
    category: 'CLI',
    desc: 'Automation script to encrypt all files inside a folder',
    link: {
      github: 'https://github.com/tfkhdyt/bayarcoek',
      demo: null,
    },
    tech: ['JavaScript', 'Node.js'],
  },
  {
    name: 'Anime Naon Ieu?',
    category: 'Bot',
    desc: 'Telegram Bot to find anime details from a screenshot',
    link: {
      github: 'https://github.com/tfkhdyt/anime-naon-ieu',
      demo: 'https://t.me/tfkhdyt_ani_bot',
    },
    tech: ['JavaScript', 'Node.js', 'Telegraf'],
  },
  {
    name: 'MovieDB',
    category: 'Website',
    desc: 'Web app to search movie information',
    link: {
      github: 'https://github.com/tfkhdyt/imdb',
      demo: 'https://movie.tfkhdyt.my.id/',
    },
    tech: ['JavaScript', 'Bootstrap'],
  },
  {
    name: '30 Hari Jago JavaScript',
    category: 'Website',
    desc: 'Web app to learn JavaScript in 30 days',
    link: {
      github: 'https://github.com/tfkhdyt/30DaysJagoJavaScript',
      demo: 'https://belajar-js.tfkhdyt.my.id/',
    },
    tech: ['JavaScript', 'Bootstrap'],
  },
  {
    name: 'School Website',
    category: 'Website',
    desc: 'SMKN 7 Baleendah school website with dynamic data',
    link: {
      github: 'https://github.com/tfkhdyt/web-sekolah',
      demo: null,
    },
    tech: ['PHP', 'Bootstrap', 'MySQL'],
  },
  {
    name: 'youtube-dl bot',
    category: 'Bot',
    desc: 'Telegram Bot to download youtube videos',
    link: {
      github: 'https://github.com/tfkhdyt/youtube-dl-bot',
      demo: null,
    },
    tech: ['JavaScript', 'Node.js', 'Telegraf'],
  },
  {
    name: 'Donation Page',
    category: 'Website',
    desc: 'Simple Donation Page',
    link: {
      github: 'https://github.com/tfkhdyt/donation-page',
      demo: 'https://donate.tfkhdyt.my.id/',
    },
    tech: ['JavaScript', 'Bootstrap'],
  },
];