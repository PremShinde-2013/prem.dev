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
import { HeroHighlight } from '../ui/hero-highlight';

function Skills() {
  return (
    <HeroHighlight className="my-5 h-fit  w-fit ">
      <section
        id="skills"
        className="h-autp relative flex flex-col items-center justify-center gap-3 overflow-hidden "
        style={{ transform: 'scale(0.9' }}
      >
        {/* <SkillText /> */}

        <h1 className="my-4 text-center text-3xl font-bold md:text-6xl">
          Dive into My Tech Arsenal
        </h1>

        <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5 rounded-xl">
          {Skilldata.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>

        <div className="mt-4 flex flex-row flex-wrap items-center justify-around gap-5 rounded-3xl">
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
    </HeroHighlight>
  );
}

export default Skills;
