import { motion } from 'framer-motion';

import { HeroHighlight, Highlight } from '../../components/ui/hero-highlight';

export function About() {
  return (
    <HeroHighlight>
      <div className="mb-10 text-center text-3xl font-bold md:text-6xl ">
        About
      </div>
      <Highlight className="mx-2 my-4 text-2xl font-bold md:text-4xl   ">
        Who am I ?
      </Highlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="lg:text-1xl mx-auto max-w-4xl px-4 text-center text-base font-bold leading-relaxed text-neutral-700 dark:text-white md:text-xl lg:leading-snug "
      >
        <br />
        <div className="text-left">
          With over two years of immersive experience in web application
          development, I&apos;ve sculpted my skills to master both frontend and
          backend realms. From fashioning captivating user interfaces to
          optimizing backend infrastructures, I thrive on transforming ideas
          into seamless digital solutions, one line of code at a time.
        </div>
        <div className="mt-8 gap-3 text-left">
          {/* btech  */}

          <Highlight className="mx-2 my-4 text-2xl font-bold md:text-4xl  ">
            Educational Journey :{' '}
          </Highlight>
          <div className="mt-12    text-xl font-bold text-purple-800  md:text-3xl">
            B.Tech in Computer Science and Engineering
          </div>
          <div className="mt-4 font-medium text-purple-600">
            Dnyanshree Institute Of Engineering And Technology | 2021 - 2025
          </div>
          <div className="ml-6 font-light ">
            &bull; Proficient in web development technologies like ReactJS and
            Node.js <br />
            &bull; Strong foundation in software architecture and algorithms
          </div>
          {/* 12th */}
          <div className="mt-12 text-xl font-bold text-purple-800  md:text-3xl">
            Senior Secondary (XII), Science
          </div>
          <div className="mt-4 font-medium text-purple-600">
            Yashwantrao Chavan Institute Of Science And Technology | 2019 - 2021
          </div>
          <div className="ml-6 font-light">
            &bull; Excelling in mathematics, physics, chemistry, physics
          </div>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}
