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
        icon: <skillIcons.RustLangIcon></skillIcons.RustLangIcon>,
      },
      {
        name: 'Typescript',
        icon: <skillIcons.TypescriptLangIcon></skillIcons.TypescriptLangIcon>,
      },
      {
        name: 'Javascript',
        icon: <skillIcons.JavascriptLangIcon></skillIcons.JavascriptLangIcon>,
      },
      {
        name: 'Go',
        icon: <skillIcons.GoLangIcon></skillIcons.GoLangIcon>,
      },
      {
        name: 'C',
        icon: <skillIcons.CLangIcon></skillIcons.CLangIcon>,
      },
      {
        name: 'C++',
        icon: <skillIcons.CPlusPlusLangIcon></skillIcons.CPlusPlusLangIcon>,
      },
      {
        name: 'C#',
        icon: <skillIcons.CSharpLangIcon></skillIcons.CSharpLangIcon>,
      },

      {
        name: 'Python',
        icon: <skillIcons.PythonLangIcon></skillIcons.PythonLangIcon>,
      },
      {
        name: 'Lua',
        icon: <skillIcons.LuaLangIcon></skillIcons.LuaLangIcon>,
      },
      {
        name: 'Bash',
        icon: <skillIcons.BashLangIcon></skillIcons.BashLangIcon>,
      },
      {
        name: 'Kotlin',
        icon: <skillIcons.KotlinLangIcon></skillIcons.KotlinLangIcon>,
      },
    ],
  },
  {
    groupName: 'Technologies',
    values: [
      {
        name: 'Next',
        icon: <skillIcons.NextJsIcon></skillIcons.NextJsIcon>,
      },
      {
        name: '.NET',
        icon: <skillIcons.DotNetIcon></skillIcons.DotNetIcon>,
      },
      {
        name: 'React',
        icon: <skillIcons.ReactIcon></skillIcons.ReactIcon>,
      },
      {
        name: 'OpenGL',
        icon: <skillIcons.OpenGlIcon></skillIcons.OpenGlIcon>,
      },
      {
        name: 'Tailwindcss',
        icon: <skillIcons.TailwindcssIcon></skillIcons.TailwindcssIcon>,
      },
      {
        name: 'Git & Github',
        icon: <skillIcons.GitIcon></skillIcons.GitIcon>,
      },
      {
        name: 'Express',
        icon: <skillIcons.ExpressIcon></skillIcons.ExpressIcon>,
      },
      {
        name: 'SQL',
        icon: <skillIcons.PostgresIcon></skillIcons.PostgresIcon>,
      },
      {
        name: 'Threejs',
        icon: <skillIcons.ThreejsIcon></skillIcons.ThreejsIcon>,
      },
      {
        name: 'SocketIO',
        icon: <skillIcons.SocketIOIcon></skillIcons.SocketIOIcon>,
      },
    ],
  },
] as const;
