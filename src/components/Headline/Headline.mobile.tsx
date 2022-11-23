import { JSX } from '@redneckz/uni-jsx';
import { AlignText } from '../../model/AlignText';

import type { UniBlockProps } from '../../model/JSXBlock';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { HEADLINE_BLOCK_STYLE_MAPS } from './constants';
import type { HeadlineContent } from './HeadlineContent';

export interface HeadlineProps extends UniBlockProps, HeadlineContent {}

export const Headline = JSX<HeadlineProps>(
  ({
    bgColorHeadline = 'transparent',
    className = '',
    title,
    description,
    image,
    align = 'left',
  }) => {
    const STYLE_MAPS = HEADLINE_BLOCK_STYLE_MAPS[bgColorHeadline];

    return (
      <section className={`px-4 py-6 flex flex-col gap-2.5 ${STYLE_MAPS.background} ${className}`}>
        {title ? (
          <Heading
            headingType="h2"
            className={`${STYLE_MAPS.text} ${AlignText[align]}`}
            title={title}
          />
        ) : null}
        {description ? (
          <p className={`text-m ${STYLE_MAPS.description} ${AlignText[align]}`}>{description}</p>
        ) : null}
        {image?.src && (
          <div className="mt-2.5 mx-auto flex justify-center">
            <Img image={image} />
          </div>
        )}
      </section>
    );
  },
);
