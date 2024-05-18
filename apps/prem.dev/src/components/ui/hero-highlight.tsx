import { cn } from '@/utils/cn';
import {
  useMotionValue,
  m,
  useMotionTemplate,
  LazyMotion,
  domAnimation,
} from 'framer-motion';
import React from 'react';

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <LazyMotion features={domAnimation}>
      <div
        className={cn(
          'group relative flex h-[40rem] w-full items-center justify-center bg-white dark:bg-black',
          containerClassName
        )}
        onMouseMove={handleMouseMove}
      >
        <div className="bg-dot-thick-neutral-300 dark:bg-dot-thick-neutral-800 pointer-events-none absolute inset-0" />
        <m.div
          className="bg-dot-thick-indigo-500 dark:bg-dot-thick-indigo-500 pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            WebkitMaskImage: useMotionTemplate`
              radial-gradient(
                200px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
            maskImage: useMotionTemplate`
              radial-gradient(
                200px circle at ${mouseX}px ${mouseY}px,
                black 0%,
                transparent 100%
              )
            `,
          }}
        />
        <div className={cn('relative z-20', className)}>{children}</div>
      </div>
    </LazyMotion>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <m.span
        initial={{
          backgroundSize: '0% 100%',
        }}
        animate={{
          backgroundSize: '100% 100%',
        }}
        transition={{
          duration: 2,
          ease: 'linear',
          delay: 0.5,
        }}
        style={{
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
          display: 'inline',
        }}
        className={cn(
          'relative inline-block rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 px-1 pb-1 dark:from-indigo-500 dark:to-purple-500',
          className
        )}
      >
        {children}
      </m.span>
    </LazyMotion>
  );
};
