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
          tech: ['Html', 'Css', 'Javascript'],
     },
     {
          name: 'To Do List',
          category: 'Website',
          desc: 'Simple Todo List App with Local and Session Storage',
          link: {
            demo: 'https://todo-list-rikmyk.vercel.app/',
            github: 'https://github.com/rikmyk/TodoList',
          },
          tech: ['Html', 'Css', 'Javascript'],
  },
     {
          name: 'Bookself API',
          category: 'API',
          desc: 'Bookself API useing postman',
          link: {
            github: 'https://github.com/rikmyk/bookself-api',
            demo: '-',
          },
          tech: ['Javascript', 'Node.js'],
  },
     
];
