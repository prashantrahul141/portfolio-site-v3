import type { FC } from 'react';
import { motion } from 'framer-motion';
import { skillsMap } from '@/utils/constantTSX';
import type { TIndiSkill, TSkillGroup } from '@/utils/constantTSX';

const IndiSkillElement: FC<{ indiSkill: TIndiSkill }> = ({ indiSkill }) => {
  return (
    <span className='flex w-fit items-center justify-center gap-2 rounded-sm bg-primary-theme-bg-50/40 p-1 px-4  sm:px-7'>
      <p>{indiSkill.icon}</p>
      <p className='text-nowrap font-inconsolata text-primary-theme-cyan-100'>
        {indiSkill.name}
      </p>
    </span>
  );
};

const SkillGroupElement: FC<{ skillGroup: TSkillGroup }> = ({ skillGroup }) => {
  return (
    <article key={skillGroup.groupName} className='my-10'>
      <h1 className='font-archivo-narrow text-xl text-primary-theme-white-100/90'>
        {skillGroup.groupName}
      </h1>
      <div className='mt-3 flex h-min flex-wrap gap-1 gap-y-1'>
        {skillGroup.values.map((skill) => {
          return <IndiSkillElement key={skill.name} indiSkill={skill} />;
        })}
      </div>
    </article>
  );
};

const SkillsInfo: FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='flex min-h-screen items-center justify-center text-white'>
      <div className='w-full max-w-5xl px-4 sm:px-8'>
        <div className='mb-5 sm:mb-12'>
          <span className='font-archivo-narrow text-3xl text-primary-theme-white-100 sm:text-6xl'>
            Skills I possess
          </span>
        </div>
        <div className='w-full'>
          {skillsMap.map((skillGroup) => (
            <SkillGroupElement
              key={skillGroup.groupName}
              skillGroup={skillGroup}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsInfo;
