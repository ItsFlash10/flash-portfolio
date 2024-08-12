import React from 'react';
import { motion } from 'framer-motion';

import SectionsWrapper from '../hoc/SectionWrapper';
import { fadeIn, textVariant } from '../utils/motion';

import { styles } from '../styles';
import { testimonials } from '../constants';

const Feedbacks: React.FC = () => {
  const renderTestimonials = () => {
    return testimonials.map((testimonialItem, index) => {
      const { testimonial, name, designation, company, image } =
        testimonialItem;
      return (
        <motion.div
          className="w-full rounded-3xl bg-[#8b7f79] p-10 xs:w-[320px]"
          variants={fadeIn('', 'spring', index * 0.5, 0.75)}
        >
          <p className="text-[48px] font-black text-white">"</p>
          <div className="mt-1">
            <p>{testimonial}</p>
            <div className="mt-7 flex items-center justify-between gap-1">
              <div className="flex flex-1 flex-col">
                <p className="text-[16px] font-medium text-white">
                  <span className="text-secondary">@</span>
                  {name}
                </p>
                <p className="mt-1 text-[12px] text-secondary">
                  {designation} of {company}
                </p>
              </div>
              <img
                className="h-10 w-10 rounded-full object-cover"
                src={image}
                alt={`feedback by ${name}`}
              />
            </div>
          </div>
        </motion.div>
      );
    });
  };

  return (
    <div className="mt-12 rounded-[20px] bg-[#09151e]">
      <div
        className={`${styles.padding} min-h-[300px] rounded-2xl bg-tertiary`}
      >
        <motion.div variants={textVariant(0.25)}>
          <p className={styles.sectionSubText}>What other says</p>
          <h2 className={styles.sectionHeadText}>Testimonials</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 flex flex-wrap gap-7 pb-14`}>
        {renderTestimonials()}
      </div>
    </div>
  );
};

export default SectionsWrapper(Feedbacks, 'feedbacks');
