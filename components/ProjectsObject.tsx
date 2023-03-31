import type { ProjectObjInterface } from '@/types';
import getLanguage from '@/components/GetLanguage';

import bpdiscordbot from '@/public/projects/bpdiscordbot.png';

export const projectObjFunc = () => {
  let selectedLanguage = getLanguage();

  const projectsObj: ProjectObjInterface[] = [
    {
      imageURL: bpdiscordbot,
      projectName: 'Brickplanet Discord Bot',
      projectDesc: selectedLanguage.MyWork.Project1,
      LivePreviewLink: '',
      techStack: [
        'Node.JS',
        'HTML Parser',
        'Discord.JS v12',
        'Express.JS',
        'MongoDB',
        'Mongoose',
        'etc. [finish techstack later]'
      ]
    },
    {
      imageURL: bpdiscordbot,
      projectName: 'Buildaverse Clothing Previewer',
      projectDesc: selectedLanguage.MyWork.Project2,
      LivePreviewLink: '',
      techStack: [
        'Node.JS',
        'Express.JS',
        'React',
        'JS',
        'Docker',
        'Python',
        'Blender'
      ]
    }
  ];
  return projectsObj;
};
