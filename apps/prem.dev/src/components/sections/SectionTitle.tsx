import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { ChevronRightIcon } from '@/components/Icons';

import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { AnimatedTooltip } from '../ui/animated-tooltip';

import type { ReactNode } from 'react';

interface Project {
  id: number;
  title: string;
  caption: string;
  description: string | ReactNode;
  imageUrl: string;
  tech: string[]; // Assuming there's a list of technologies used for each project
  button: {
    title: string;
    href: string;
  };
}

interface SectionTitleProps {
  project: Project; // Pass a single project as a prop
}

function SectionTitle({ project }: SectionTitleProps) {
  const { title, caption, description, imageUrl, tech, button } = project;
  return (
    <>
      {/* <div className={clsx('content-wrapper')}>
        <Heading
          className={clsx(
            'text-accent-600 mb-2 block font-black',
            'lg:mb-4',
            'dark:text-accent-400'
          )}
        >
          {caption}
        </Heading>
        <p
          className={clsx(
            'mb-4 text-3xl font-black text-slate-700',
            'lg:text-4xl',
            'dark:text-slate-200'
          )}
        >
          {title}
        </p>
        <p className={clsx('max-w-lg text-slate-600', 'dark:text-slate-400')}>
          {description}
        </p>
        {button && (
          <div className={clsx('mt-4', 'md:mt-6')}>
            <Link href={button.href} className={clsx('button button--soft')}>
              {button.title}
              <ChevronRightIcon className="mt-0.5 h-3 w-3" />
            </Link>
          </div>
        )}
      </div> */}

      <CardContainer className="inter-var">
        <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-4 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
          <CardItem translateZ="100" className="mt-4 w-full">
            <Image
              src={imageUrl}
              height="1000"
              width="1000"
              className="h-60 w-full rounded-3xl object-cover p-4 group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <CardItem
            translateZ="50"
            className="text-blck text-3xl font-bold dark:text-white"
          >
            {title}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-medium text-blck dark:text-blck mt-2 max-w-sm"
          >
            {caption}{' '}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-blck dark:text-blck mt-2 max-w-sm text-sm"
          >
            {description}
          </CardItem>

          <div className="mt-10 flex items-center justify-between">
            {/* <div className=" flex w-full flex-row items-center justify-center">
              <AnimatedTooltip items={tech} />
            </div> */}
            <div className="flex items-center">
              {tech.map((technology, index) => (
                <div
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/[.2] bg-black lg:h-12 lg:w-12"
                  style={{
                    transform: `translateX(-${5 * index + 2}px)`,
                  }}
                >
                  {/* You can replace the placeholder `technology` with your actual icons */}
                  <img src={technology} alt="icon5" className="p-2" />

                  {/* <span>{technology}</span> */}
                </div>
              ))}
            </div>

            <CardItem
              href={button.href}
              as={Link}
              translateZ={20}
              className="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
            >
              {button.title}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </>
  );
}

export default SectionTitle;
