import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import SectionsWrapper from '../hoc/SectionWrapper';

const About: React.FC = () => {
  const renderServiceCard = () =>
    services.map((service, index) => {
      const { icon, title } = service;
      return (
        <Tilt className="w-full xs:w-[250px]" key={title}>
          <motion.div
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
          >
            <div
              // options={{
              //   max: 45,
              //   scale: 1,
              //   speed: 450,
              // }}
              className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-[#001B2A] px-12 py-5"
            >
              {/* <img
                src={icon}
                alt={title}
                className="h-16 w-16 object-contain"
              /> */}
              <h3 className="text-center text-[20px] font-bold text-white">
                {title}
              </h3>
            </div>
          </motion.div>
        </Tilt>
      );
    });
  return (
    <>
      <motion.div variants={textVariant(0.25)}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 max-w-3xl text-[16px] leading-[24px] text-secondary"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, nisi
        accusantium? Cum expedita ducimus doloremque! Sunt veritatis sequi non
        nihil enim porro aspernatur sed omnis sit quasi. Nobis, sint sunt! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Repellat neque nisi
        odio! Officiis rem vero laudantium est, deleniti dolore. Fugit error
        nobis ad veniam quasi modi hic, voluptatum incidunt quam. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Illo, exercitationem
        quisquam! Eaque ipsum aut dolore delectus ratione. Illo vero aliquid
        molestiae, harum eaque, laudantium a illum nemo omnis nisi aut.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">{renderServiceCard()}</div>
    </>
  );
};

export default SectionsWrapper(About, 'about');
