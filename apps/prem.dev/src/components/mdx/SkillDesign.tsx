/* eslint-disable react/no-array-index-key */
import React from 'react';

import {
  Backendskill,
  Frontendskill,
  Fullstack,
  Otherskill,
  Skilldata,
} from '@/constants';

import SkillDataProvider from '../SkillDataProvider';

function Skills() {
  return (
    <section
      id="skills"
      className="relative flex h-full flex-col items-center justify-center gap-3 overflow-hidden "
      style={{ transform: 'scale(0.9' }}
    >
      {/* <SkillText /> */}

      <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
        {Skilldata.map((image, index) => (
          <SkillDataProvider
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
        {Frontendskill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
        {Backendskill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
        {Fullstack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5">
        {Otherskill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}

export default Skills;
