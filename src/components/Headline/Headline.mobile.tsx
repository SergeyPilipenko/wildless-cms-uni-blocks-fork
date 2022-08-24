import { JSX } from '@redneckz/uni-jsx';

import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { ALIGN_TEXT, BACKGROUND_COLOR } from './constants';
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
    return (
      <section className={`px-4 py-6 ${BACKGROUND_COLOR[bgColorHeadline]} ${className}`}>
        {title && (
          <Heading
            headingType="h2"
            className={`text-primary-text ${ALIGN_TEXT[align]}`}
            title={title}
          />
        )}
        {description && (
          <p className={`font-normal text-m-md ${ALIGN_TEXT[align]} ${title ? 'mt-2.5' : ''}`}>
            {description}
          </p>
        )}
        {image?.src && (
          <div className="mt-5 mx-auto flex justify-center">
            <Img image={image} />
          </div>
        )}
      </section>
    );
  },
);
