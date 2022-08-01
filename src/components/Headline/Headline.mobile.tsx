import { JSX } from '@redneckz/uni-jsx';

import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img';
import type { HeadlineContent } from './HeadlineContent';

export interface HeadlineProps extends UniBlockProps, HeadlineContent {}

export const Headline = JSX<HeadlineProps>(
  ({ bgColor = 'transparent', className = '', title, description, image }) => {
    return (
      <section className={`px-4 py-6 ${bgColor} ${className}`}>
        {title && <Heading type="h2" className="text-primary-text" text={title} />}
        {description && (
          <p className={`font-normal text-m-md ${title ? 'mt-2.5' : ''}`}>{description}</p>
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
