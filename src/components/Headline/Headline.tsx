import { JSX } from '@redneckz/uni-jsx';

import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { ALIGN_TEXT, BACKGROUND_COLOR } from './constants';
import type { HeadlineContent } from './HeadlineContent';

export interface HeadlineProps extends UniBlockProps, HeadlineContent {}

export const Headline = JSX<HeadlineProps>(
  ({ bgColorHeadline = 'transparent', align = 'left', className = '', title, description }) => {
    return (
      <section className={`p-[50px] ${BACKGROUND_COLOR[bgColorHeadline]} ${className}`}>
        {title && (
          <Heading
            headingType="h2"
            className={`text-primary-text ${ALIGN_TEXT[align]}`}
            title={title}
          />
        )}
        {description && (
          <p className={`font-normal text-base mt-4 ${ALIGN_TEXT[align]}`}>{description}</p>
        )}
      </section>
    );
  },
);
