import clsx from 'clsx';

import { CodeIcon, HeartIcon, SparklesIcon } from '@/components/Icons';

import FeaturedCard from '@/contents/index/FeaturedCard';
import Header from '@/contents/index/Header';
import Quote from '@/contents/index/Quote';

import { About } from './About';
import GithubGraphSection from './Github';
import Looking from './looking';

function FeaturedCardSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex flex-col gap-4', 'lg:flex-row lg:gap-8')}>
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-amber-300 p-3.5',
                'dark:bg-amber-900'
              )}
            >
              <SparklesIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Simplicity, Elevated"
          desc="Crafting interfaces with modern flair and intuitive functionality, ensuring delightful user experiences."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-pink-300 p-3.5',
                'dark:bg-pink-900'
              )}
            >
              <HeartIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Precision in Engagement"
          desc="Impeccable interfaces designed for unparalleled engagement, meticulously crafted to elevate user journeys."
        />
        <FeaturedCard
          icon={
            <div
              className={clsx(
                'rounded-full bg-sky-300 p-3.5',
                'dark:bg-sky-900'
              )}
            >
              <CodeIcon className={clsx('h-5 w-5 text-white')} />
            </div>
          }
          title="Efficiency in Elegance"
          desc="Where elegance meets efficiency, delivering flawless user experiences with visually stunning designs and optimal performance."
        />
      </div>
    </div>
  );
}

function QuoteSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex items-center justify-center py-8')}>
        <Quote />
      </div>
    </div>
  );
}
function LookingSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex items-center justify-center py-8')}>
        <Looking />
      </div>
    </div>
  );
}
function AboutSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex items-center justify-center py-8')}>
        <About />
      </div>
    </div>
  );
}
function GithubSection() {
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex items-center justify-center py-8')}>
        <GithubGraphSection />
      </div>
    </div>
  );
}

function IndexContents() {
  return (
    <>
      <Header />
      <div className={clsx('hidden', 'lg:-mt-16 lg:mb-24 lg:block')}>
        <FeaturedCardSection />
      </div>
      <div className={clsx('-mt-24 mb-24', 'md:mt-0 md:mb-24')}>
        <QuoteSection />
      </div>
      <div className={clsx('-mt-24 mb-24', 'md:mt-0 md:mb-24')}>
        <LookingSection />
      </div>
      <div className={clsx('-mt-24 mb-24', 'md:mt-0 md:mb-24')}>
        <About />
      </div>
      <div className={clsx('-mt-24 mb-24', 'md:mt-0 md:mb-24')}>
        <GithubSection />
      </div>
    </>
  );
}

export default IndexContents;
