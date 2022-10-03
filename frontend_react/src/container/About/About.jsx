import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants';

import './About.scss';

const abouts = [
  { title: 'Frontend', description: 'reactJS', imgUrl: images.about01 },
  { title: 'Backend', description: 'nodeJS', imgUrl: images.about02 },
  {
    title: 'Full Stack',
    description: 'nodeJS, reactJS',
    imgUrl: images.about03,
  },
  { title: 'UI/UX', description: 'figma', imgUrl: images.about04 },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know that <span>Good Development</span>
        <br /> means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" stype={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" stype={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
