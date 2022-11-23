import { JSX } from '@redneckz/uni-jsx';
import { AlignText } from '../../model/AlignText';

import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Description } from '../../ui-kit/Description/Description';
import { Heading } from '../../ui-kit/Heading/Heading';
import { HEADLINE_BLOCK_STYLE_MAPS, HEADLINE_VERSION } from './constants';
import type { HeadlineContent } from './HeadlineContent';

export interface HeadlineProps extends UniBlockProps, HeadlineContent {}

export const Headline = JSX<HeadlineProps>(
  ({
    bgColorHeadline = 'transparent',
    align = 'center',
    className = '',
    title,
    description,
    headlineVersion = 'XL',
    as,
    ...rest
  }) => {
    const STYLE_MAPS = HEADLINE_BLOCK_STYLE_MAPS[bgColorHeadline];
    const SIZE_MAPS = HEADLINE_VERSION[headlineVersion];

    return (
      <BlockWrapper
        className={`font-sans flex flex-col p-[50px] ${SIZE_MAPS.gap} ${STYLE_MAPS.background} ${className}`}
        {...rest}
      >
        {title ? (
          <Heading
            headingType={SIZE_MAPS?.headingType}
            as={as || SIZE_MAPS?.as}
            className={`whitespace-pre-wrap ${STYLE_MAPS.text} ${AlignText[align]}`}
            title={title}
          />
        ) : null}
        {description ? (
          <Description
            className={`${SIZE_MAPS.descriptionFont} ${STYLE_MAPS.text} ${AlignText[align]}`}
            description={description}
          />
        ) : null}
      </BlockWrapper>
    );
  },
);
