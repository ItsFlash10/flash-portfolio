import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import SectionsWrapper from '../hoc/SectionWrapper';
import { slideIn } from '../utils/motion';
import { styles } from '../styles';
import { ComputersCanvas, EarthCanvas, StarsCanvas } from '.';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {};

  return (
    <div className="flex flex-col-reverse gap-10 xl:mt-12 xl:flex-row">
      <motion.div
        className="flex-[0.75] rounded-2xl bg-[#09151e] p-8"
        variants={slideIn('left', 'tween', 0.2, 1)}
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Name</span>
            <input
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              name="name"
              onChange={handleChange}
              placeholder={`What's your name?`}
              type="text"
              value={form.name}
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your email</span>
            <input
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              name="name"
              onChange={handleChange}
              placeholder={`What's your email?`}
              type="text"
              value={form.email}
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Name</span>
            <textarea
              rows={7}
              className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              name="name"
              onChange={handleChange}
              placeholder={`What do you want to say?`}
              value={form.message}
            />
          </label>
          <button
            className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none"
            type="submit"
          >
            {isLoading ? 'Sending' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <ComputersCanvas />
      </motion.div>
    </div>
  );
};

export default SectionsWrapper(Contact, 'contact');
