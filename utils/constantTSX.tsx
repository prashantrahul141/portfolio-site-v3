import { skillIcons } from '@/components/common/icons';
import type { ReactElement } from 'react';

const navigationOptions = [
  { id: 0, text: 'Home', link: '/' },
  { id: 1, text: 'Blogs', link: '/blogs' },
  { id: 2, text: 'Gallery', link: '/gallery' },
] as const;

export { navigationOptions };

export type TIndiSkill = { name: string; icon: ReactElement };
export type TSkillGroup = { groupName: string; values: Array<TIndiSkill> };
export type TSkills = Array<TSkillGroup>;

export const skillsMap: TSkills = [
  {
    groupName: 'Languages',
    values: [
      {
        name: 'Rust',
        icon: <skillIcons.RustLangIcon />,
      },
      {
        name: 'Typescript/Javascript',
        icon: <skillIcons.TypescriptLangIcon />,
      },
      {
        name: 'Go',
        icon: <skillIcons.GoLangIcon />,
      },
      {
        name: 'C',
        icon: <skillIcons.CLangIcon />,
      },
      {
        name: 'C++',
        icon: <skillIcons.CPlusPlusLangIcon />,
      },
      {
        name: 'C#',
        icon: <skillIcons.CSharpLangIcon />,
      },

      {
        name: 'Python',
        icon: <skillIcons.PythonLangIcon />,
      },
      {
        name: 'Lua',
        icon: <skillIcons.LuaLangIcon />,
      },
      {
        name: 'Bash',
        icon: <skillIcons.BashLangIcon />,
      },
      {
        name: 'Kotlin',
        icon: <skillIcons.KotlinLangIcon />,
      },
    ],
  },
  {
    groupName: 'Technologies',
    values: [
      {
        name: 'Solid',
        icon: <skillIcons.NextJsIcon />,
      },
      {
        name: 'Next',
        icon: <skillIcons.NextJsIcon />,
      },
      {
        name: '.NET',
        icon: <skillIcons.DotNetIcon />,
      },
      {
        name: 'OpenGL',
        icon: <skillIcons.OpenGlIcon />,
      },
      {
        name: 'Tailwindcss',
        icon: <skillIcons.TailwindcssIcon />,
      },
      {
        name: 'Git',
        icon: <skillIcons.GitIcon />,
      },
      {
        name: 'SQL',
        icon: <skillIcons.PostgresIcon />,
      },
      {
        name: 'Threejs',
        icon: <skillIcons.ThreejsIcon />,
      },
      {
        name: 'Sockets',
        icon: <skillIcons.SocketIOIcon />,
      },
    ],
  },
];
