/* eslint-disable react/no-array-index-key */
import clsx from 'clsx';
import { useState } from 'react';
import { projects } from '../../data/projects';
import { GitHubIcon, NpmIcon, StarIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';
import AppWindow from '@/components/wireframes/AppWindow';
import GitHubWireframe from '@/components/wireframes/GitHub';
import NpmWireframe from '@/components/wireframes/Npm';

import { HeroHighlight, Highlight } from '../../components/ui/hero-highlight';

function ProjectsContents() {
  const [currentState, setCurrentState] = useState<'contribute' | 'github'>(
    'github'
  );

  return (
    <>
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div className={clsx('hidden flex-1 flex-col gap-3 pt-8', 'lg:flex')}>
            <div className={clsx('flex flex-col gap-3')}>
              <SectionButton
                title="Discover my creations on GitHub"
                icon={<GitHubIcon className={clsx('my-2 h-16 w-16')} />}
                description="Dive into the treasure trove of my projects, all freely available on GitHub! Explore, utilize, and innovate with ease. Feel empowered to incorporate them into your creations and projects. Let's collaborate and build a brighter future together!"
                active={currentState === 'github'}
                onClick={() => setCurrentState('github')}
              />
              <SectionButton
                title="Contribute & Star"
                icon={<StarIcon className={clsx('my-2 h-16 w-16')} />}
                description="Feel free to contribute to this amazing project on GitHub. Don't forget to give it a star!"
                active={currentState === 'contribute'}
                onClick={() => setCurrentState('contribute')}
              />
            </div>
          </div>
          <div className={clsx('w-full', 'lg:w-auto')}>
            <div className={clsx('-mt-[41px]')}>
              <div className={clsx('w-full', 'lg:h-[400px] lg:w-[600px]')}>
                <AppWindow
                  type="browser"
                  browserTabs={[
                    {
                      icon: <GitHubIcon className="h-4 w-4" />,
                      title: 'premdev/ - GitHub',
                      isActive: currentState === 'github',
                    },
                    {
                      icon: <StarIcon className="h-4 w-4" />,
                      title: '- Contribute',
                      isActive: currentState === 'contribute',
                    },
                  ]}
                >
                  {currentState === 'github' && (
                    <GitHubWireframe
                      author="premdev"
                      license="MIT"
                      repository="Projects"
                      description="Discover a world of innovation and creativity! Visit my GitHub profile to explore a myriad of unique projects waiting to inspire you."
                    />
                  )}
                  {currentState === 'contribute' && (
                    <NpmWireframe
                      packageName="Projects"
                      description="Feel free to contribute to this amazing project on GitHub. Don't forget to give it a star!"
                      isWithTypeScript
                    />
                  )}
                </AppWindow>
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
      <HeroHighlight className="h-fit w-fit">
        <div className=" flex w-full flex-wrap ">
          {projects.map((project, index) => (
            <div key={index} className="w-full p-2 md:w-1/2">
              {' '}
              {/* Use flex-wrap for responsiveness */}
              <SectionTitle project={project} />
            </div>
          ))}
        </div>
      </HeroHighlight>
    </>
  );
}

export default ProjectsContents;
