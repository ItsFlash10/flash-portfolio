import React from 'react';
import { technologies } from '../constants';
import { BallCanvas } from '.';
import SectionsWrapper from '../hoc/SectionWrapper';

const Tech: React.FC = () => {
  const renderTechnologies = () =>
    technologies.map((tech) => {
      const { icon, name } = tech;
      return (
        <div className="h-24 w-24" key={tech.name}>
          <BallCanvas icon={icon}></BallCanvas>
        </div>
      );
    });

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {renderTechnologies()}
    </div>
  );
};

export default SectionsWrapper(Tech, 'tech');
