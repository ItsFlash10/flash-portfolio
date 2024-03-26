import { motion } from 'framer-motion';
import React from 'react';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import SectionsWrapper from '../hoc/SectionWrapper';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { experiences } from '../constants';
import 'react-vertical-timeline-component/style.min.css';

const Experience: React.FC = () => {
  const renderExperiencePoints = (data: Array<string>) =>
    data.map((point, index) => {
      return (
        <li
          className="text-white-10 pl-1 text-[14px] tracking-wider"
          key={`experience-point-${index}`}
        >
          {point}
        </li>
      );
    });
  const renderExperiences = () =>
    experiences.map((experience) => {
      const { companyName, date, icon, iconBg, points, title } = experience;
      return (
        <VerticalTimelineElement
          key={title}
          contentStyle={{ background: '#1A2F3B', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #232631' }}
          date={date}
          iconStyle={{ background: iconBg }}
          icon={
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={icon}
                alt={companyName}
                className="h-[60%] w-[60%] object-contain"
              />
            </div>
          }
        >
          <div>
            <h3 className="text-[24px] font-bold text-white">{title}</h3>
            <p
              className="text-[16px] font-semibold text-secondary"
              style={{ margin: 0 }}
            >
              {companyName}
            </p>
          </div>
          <ul className="ml-5 mt-5 list-disc space-y-2">
            {renderExperiencePoints(points)}
          </ul>
        </VerticalTimelineElement>
      );
    });
  return (
    <>
      <motion.div variants={textVariant(0.25)}>
        <p className={styles.sectionSubText}>What have I done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
{/*         <VerticalTimeline>{renderExperiences()}</VerticalTimeline> */}
      </div>
    </>
  );
};

export default SectionsWrapper(Experience, 'experience');
