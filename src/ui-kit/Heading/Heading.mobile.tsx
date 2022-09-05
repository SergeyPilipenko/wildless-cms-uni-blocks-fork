import { JSX } from '@redneckz/uni-jsx';
import { HeadingContent, HeadingType, HeadingTypeContent } from './HeadingContent';

export interface HeadingProps extends HeadingContent, HeadingTypeContent {
  className?: string;
  as?: HeadingType;
}

const HeadingClass: Record<HeadingType, string> = {
  h1: 'text-m-title',
  h2: 'text-m-title',
  h3: 'text-m-title-md',
  h4: 'text-m-title-xs',
  h5: 'text-m-title-xs',
  h6: 'text-m-title-xs',
};

export const Heading = JSX<HeadingProps>((props) => {
  const { className, headingType, title, as } = props;

  if (!headingType) {
    return;
  }

  const Tag = as || headingType;

  return (
    <Tag className={`font-sans font-medium m-0 ${HeadingClass[headingType]} ${className || ''}`}>
      {title}
    </Tag>
  );
});
