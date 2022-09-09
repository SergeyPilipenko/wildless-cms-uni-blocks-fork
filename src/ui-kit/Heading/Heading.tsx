import { JSX } from '@redneckz/uni-jsx';
import { HeadingContent, HeadingType, HeadingTypeContent } from './HeadingContent';

export interface HeadingProps extends HeadingContent, HeadingTypeContent {
  className?: string;
  as?: HeadingType;
}

const HEADING_STYLE_MAP: Record<HeadingType, string> = {
  h1: 'text-title-xl tracking-[-0.3px]',
  h2: 'text-title-lg',
  h3: 'text-title',
  h4: 'text-title-sm',
  h5: 'text-title-xs',
  h6: 'text-title-2xs tracking-[0.2px]',
};

export const Heading = JSX<HeadingProps>((props) => {
  const { className = '', headingType, title, as } = props;

  if (!headingType) {
    return;
  }

  const Tag = as || headingType;

  return (
    <Tag className={`font-sans m-0 ${HEADING_STYLE_MAP[headingType]} ${className}`}>{title}</Tag>
  );
});
