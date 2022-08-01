import { JSX } from '@redneckz/uni-jsx';
import { HeadingProps } from './HeadingProps';

const HeadingClass: Record<HeadingProps['type'], string> = {
  h1: 'text-m-title',
  h2: 'text-m-title',
  h3: 'text-m-title-md',
  h4: 'text-m-title-xs',
  h5: 'text-m-title-xs',
  h6: 'text-m-title-xs',
};

export const Heading = JSX<HeadingProps>((props) => {
  const { className, type, text } = props;
  const Tag = type;

  return (
    <Tag className={`font-sans font-medium ${HeadingClass[type]} ${className || ''}`}>{text}</Tag>
  );
});
