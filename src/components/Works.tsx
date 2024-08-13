import React from 'react';
import SectionsWrapper from '../hoc/SectionWrapper';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { projects } from '../constants';
import { Tilt } from 'react-tilt';
import { github } from '../assets';

interface IProjectCardProps {
  index: number;
  name: string;
  image: string;
  source_code_link: string;
}

const ProjectCard: React.FC<IProjectCardProps> = (props) => {
  const { index, image, name, source_code_link } = props;
  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="w-full rounded-2xl bg-[#1A2F3B] p-5 sm:w-[360px]"
      >
        <div className="relative h-[230px] w-full">
          <img
            src={image}
            alt={name}
            className="h-full w-full rounded-2xl object-fill"
          />
          <div
            className="card-img_hover black-gradient absolute right-0 top-0 m-3 flex h-10 w-10 cursor-pointer justify-center rounded-full"
            onClick={() => window.open(source_code_link, '_blank')}
          >
            <img src={github} alt="github" className="h-8 w-8  self-center" />
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0.25)}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionsWrapper(Works, 'works');
