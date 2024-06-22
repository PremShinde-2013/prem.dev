'use client';

/* eslint-disable prefer-template */

import * as React from 'react';
import { cn } from '@/utils/cn';
import { useMotionValue, useTransform, m as motion } from 'framer-motion';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, ...props }, ref) => {
    const radius = 100; // change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const background = useTransform(
      [mouseX, mouseY],
      ([newMouseX, newMouseY]) =>
        `radial-gradient(
          ${
            visible ? `${radius}px` : '0px'
          } circle at ${newMouseX}px ${newMouseY}px,
          var(--blue-500),
          transparent 80%
        )`
    );

    function handleMouseMove(
      event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) {
      const { currentTarget, clientX, clientY } = event;
      const { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <motion.div
        style={{ background }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/input rounded-lg p-[2px] transition duration-300"
      >
        <textarea
          className={cn(
            `shadow-input dark:placeholder-text-neutral-600 duration-400 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition file:border-0 
          file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 disabled:cursor-not-allowed
          disabled:opacity-50 group-hover/input:shadow-none
          dark:bg-zinc-800
          dark:text-white dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] dark:focus-visible:ring-neutral-600
          `,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

TextArea.displayName = 'TextArea';

export { TextArea };
