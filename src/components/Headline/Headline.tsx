import { JSX } from '@redneckz/uni-jsx';

import { BlockWrapper } from '../../ui-kit/BlockWrapper';
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
    headingType = 'h2',
    ...rest
  }) => {
    const STYLE_MAPS = HEADLINE_BLOCK_STYLE_MAPS[bgColorHeadline];

    return (
      <BlockWrapper
        className={`p-[50px] flex flex-col gap-4 ${STYLE_MAPS.background} ${className}`}
        {...rest}
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
      </BlockWrapper>
    );
  },
);
