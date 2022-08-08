import { JSX } from '@redneckz/uni-jsx';

import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { AlignType } from '../BaseTile/BaseTileProps';
import type { HeadlineContent } from './HeadlineContent';

export interface HeadlineProps extends UniBlockProps, HeadlineContent {}

const alignText: Record<AlignType, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const Headline = JSX<HeadlineProps>(
  ({ bgColor = 'transparent', align = 'left', className = '', title, description }) => {
    const textClasses = alignText[align];
    return (
      <section className={`p-[50px] ${bgColor} ${className}`}>
        {title && (
          <Heading headingType="h2" className={`text-primary-text ${textClasses}`} title={title} />
        )}
        {description && (
          <p className={`font-normal text-base mt-4 ${textClasses}`}>{description}</p>
        )}
      </section>
    );
  },
);
