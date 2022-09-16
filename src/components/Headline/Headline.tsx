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
  }) => {
    const STYLE_MAPS = HEADLINE_BLOCK_STYLE_MAPS[bgColorHeadline];
    return (
      <section className={`p-[50px] ${STYLE_MAPS.background} ${className}`} id={anchor}>
        {title ? (
          <Heading
            headingType="h2"
            className={`text-primary-text ${STYLE_MAPS.text} ${ALIGN_TEXT[align]}`}
            title={title}
          />
        ) : null}
        {description ? (
          <p className={`font-normal text-base mt-4 ${STYLE_MAPS.text} ${ALIGN_TEXT[align]}`}>
            {description}
          </p>
        ) : null}
      </section>
    );
  },
);
