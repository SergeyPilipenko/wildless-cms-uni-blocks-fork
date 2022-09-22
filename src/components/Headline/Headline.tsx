import { JSX } from '@redneckz/uni-jsx';

import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { ALIGN_TEXT, HEADLINE_BLOCK_STYLE_MAPS } from './constants';
import type { HeadlineContent } from './HeadlineContent';

export interface HeadlineProps extends UniBlockProps, HeadlineContent {}

export const Headline = JSX<HeadlineProps>(
  ({
    bgColorHeadline = 'transparent',
    align = 'left',
    className = '',
    title,
    description,
    anchor = null,
    headingType = 'h2',
  }) => {
    const STYLE_MAPS = HEADLINE_BLOCK_STYLE_MAPS[bgColorHeadline];

    return (
      <section
        className={`p-[50px] flex flex-col gap-4 ${STYLE_MAPS.background} ${className}`}
        id={anchor}
      >
        {title ? (
          <Heading
            headingType={headingType}
            className={`text-primary-text ${STYLE_MAPS.text} ${ALIGN_TEXT[align]}`}
            title={title}
          />
        ) : null}
        {description ? (
          <p className={`text-base ${STYLE_MAPS.text} ${ALIGN_TEXT[align]}`}>{description}</p>
        ) : null}
      </section>
    );
  },
);
