import type { ProjectObjInterface } from '@/types';
import getLanguage from '@/components/GetLanguage';

import bpdiscordbot from '@/public/projects/bpdiscordbot.png';
import buildaverseclothing from '@/public/projects/buildaverseclothingpreviewer.png';
import portfolioproject from '@/public/projects/portfolioproject.png';
import noImagePic from '@/public/projects/noImage.png';

export const projectObjFunc = () => {
  let selectedLanguage = getLanguage();

  const projectsObj: ProjectObjInterface[] = [
    {
      imageURL: bpdiscordbot,
      projectName: 'Brickplanet Discord Bot',
      projectDesc: selectedLanguage.MyWork.Project1,
      LivePreviewLink: '',
      GithubLink: 'https://github.com/kdKrzysztof/BP-discord-bot',
      techStack: [
        'Node.js',
        'Discord.JS v13',
        'Express.JS',
        'node-html-parser',
        'MongoDB',
        'Mongoose'
      ]
    },
    {
      imageURL: buildaverseclothing,
      projectName: 'Buildaverse Clothing Previewer',
      projectDesc: selectedLanguage.MyWork.Project2,
      LivePreviewLink: '',
      GithubLink: 'https://github.com/kdKrzysztof/ClothingPreviewer',
      techStack: [
        'Javascript',
        'HTML',
        'CSS',
        'React',
        'Node.js',
        'Express.js',
        'Docker',
        'Nginx',
        'Blender',
        'BlenderPy'
      ]
    },
    {
      imageURL: portfolioproject,
      projectName: 'Portfolio',
      projectDesc: selectedLanguage.MyWork.Project3,
      LivePreviewLink: '',
      GithubLink: 'https://github.com/kdKrzysztof/portfolio',
      techStack: ['TypeScript', 'Next.js', 'HTML', 'SCSS', 'MaterialUI', 'framer-motion']
    },
    {
      imageURL: noImagePic,
      projectName: 'Todo list app (backend)',
      projectDesc: selectedLanguage.MyWork.Project4,
      LivePreviewLink: '',
      GithubLink: 'https://github.com/kdKrzysztof/TodoApp',
      techStack: [
        'Node-ts',
        'Express.js',
        'Express-validator',
        'Sequelize',
        'PostreSQL',
        'JWT',
        'Mocha'
      ]
    }
  ];
  return projectsObj;
};
