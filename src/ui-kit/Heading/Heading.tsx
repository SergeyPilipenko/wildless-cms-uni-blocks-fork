import { JSX } from '@redneckz/uni-jsx';
import { HeadingProps } from './HeadingProps';

const HeadingClass: Record<HeadingProps['type'], string> = {
  h1: 'text-title-lg tracking-[-0.3px]',
  h2: 'text-title',
  h3: 'text-title-sm',
  h4: 'text-title-xs',
  h5: 'text-title-2xs tracking-[0.2px]',
  h6: 'text-title-2xs tracking-[0.2px]',
};

export const Heading = JSX<HeadingProps>((props) => {
  const { className, type, text } = props;
  const Tag = type;

  return (
    <Tag className={`font-sans font-medium ${HeadingClass[type]} ${className || ''}`}>{text}</Tag>
  );
});
