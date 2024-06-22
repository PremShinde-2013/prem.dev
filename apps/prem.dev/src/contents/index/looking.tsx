// // Section structure
// import Section from '../../structure/section';
// import Container from '../../structure/container';

import RetroGrid from '@/components/magicui/retro-grid';
import SparklesText from '@/components/magicui/sparkels-text';
import SectionContent from '@/components/sections/SectionContent';

// Section general blocks
// Spacing util
// Section scss
// import looking from '../../../styles/scss/sections/index/looking.module.scss';
// import section from '../../../styles/scss/blocks/section.title.module.scss';
export default function Looking() {
  return (
    <div className="bg-background relative flex h-full w-screen  items-center justify-center overflow-hidden rounded-3xl border  md:shadow-xl">
      <div className="mx-auto  my-12 flex max-w-xl flex-col justify-center  text-left text-lg  ">
        <h4 className="my-4  text-lg font-semibold tracking-wider md:text-xl ">
          I&apos;m currently looking for
        </h4>
        <SparklesText text="Jobs: &#123;" />
        <h2 className="my-4 ml-8 text-3xl font-bold leading-none md:text-5xl">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Full Stack Developer
          </span>
          ,
        </h2>
        <h2 className="my-4 ml-8 text-3xl font-bold leading-none md:text-5xl">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500  to-pink-500 bg-clip-text text-transparent">
            Software Engineer
          </span>
        </h2>
        <SparklesText text="&#125;" />

        <h4 className="mt-4 text-lg  font-bold tracking-wider md:text-xl">
          I am particularly interested in product-based positions where I can
          help make an organization-wide impact.
        </h4>
        {/* <h2>Fresher <span className="bg-gradient-to-r from-neon-1-1 to-neon-1-2 bg-clip-text text-transparent">User Experience</span> Designer</h2> */}
        {/* <p className="subtitle">with a focus on Product Design.</p> */}
      </div>

      <RetroGrid />
    </div>
  );
}
