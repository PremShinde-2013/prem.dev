import { Button } from '@nextui-org/react';
import React, { useState } from 'react';
import GitHubCalendar from 'react-github-calendar';

import SectionContent from '@/components/sections/SectionContent';

import { cn } from '@/lib/utils';
import AnimatedGridPattern from '@/components/magicui/animated-grid-pattern';
import { AuroraBackground } from '../../components/ui/aurora-background';
import SparklesText from '@/components/magicui/sparkels-text';

const contributionYears = [2024, 2023, 2022];
export default function GithubGraphSection() {
  const [year, setYear] = useState(2024);

  return (
    <section className="my-36 w-auto ">
      <div className="bg-background relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border  md:shadow-xl">
        {/* <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
          Animated Grid Pattern
        </p> */}
        <div>
          <div>
            <div className="mb-8 flex flex-col justify-center gap-4 text-center">
              <h4 className="text-lg font-bold">Embark on a Journey Through</h4>
              <SparklesText
                className="text-4xl font-bold lg:text-5xl"
                text="My GitHub Contributions"
              />

              <p className="text-base font-semibold tracking-wider">
                Discover my GitHub Contributions, a testament to my ongoing
                dedication to open-source. Each commit echoes my unwavering
                commitment to innovation, crafting a narrative of progress and
                creativity across years of coding passion.
              </p>
            </div>

            <section>
              <div>
                <div>
                  <div className="pb-18 pt-100 space-y-6 md:space-y-12">
                    <div className="text-md mt-3 flex w-fit flex-wrap gap-3 rounded-3xl  bg-purple-300 p-2 leading-7">
                      {contributionYears.map((singleYear) => (
                        <Button
                          key={singleYear}
                          type="button"
                          className={`h-8 w-16  cursor-pointer rounded-2xl text-xl font-bold md:h-10 md:w-auto  ${
                            year === singleYear
                              ? 'bg-violet-600 text-white'
                              : 'text-black'
                          }    hover:bg-violet-600 hover:text-white`}
                          onClick={() => setYear(singleYear)}
                        >
                          {singleYear}
                        </Button>
                      ))}
                    </div>

                    <div className="hover:border-primary-900 flex w-80 items-center justify-center overflow-x-scroll rounded-md border-2 border-gray-700 border-opacity-60 p-6 transition-all md:w-full  ">
                      <GitHubCalendar
                        key={`${year}-calendar`}
                        username="PremShinde-2013"
                        year={year}
                        colorScheme="light"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.5}
          duration={3}
          repeatDelay={1}
          className={cn(
            '[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]',
            'inset-x-0 inset-y-[-30%] h-[200%] skew-y-12'
          )}
        />
      </div>
    </section>
  );
}
