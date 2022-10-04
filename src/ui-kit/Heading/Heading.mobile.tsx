import { JSX } from '@redneckz/uni-jsx';
import type { HeadingProps, HeadingType } from './HeadingProps';

const HeadingClass: Record<HeadingType, string> = {
  h0: 'text-m-title',
  h1: 'text-m-title',
  h2: 'text-m-title',
  h3: 'text-m-title-md',
  h4: 'text-m-title-xs',
  h5: 'text-m-title-xs',
  h6: 'text-m-title-xs',
};

export const Heading = JSX<HeadingProps>((props) => {
  const { className, headingType = 'h3', title, as: Tag = 'h3' } = props;

  return (
    <Tag className={`font-sans font-medium m-0 ${HeadingClass[headingType]} ${className || ''}`}>
      {title}
    </Tag>
  );
});
