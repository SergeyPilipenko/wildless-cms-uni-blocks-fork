import { JSX } from '@redneckz/uni-jsx';
import type { HeadingProps, HeadingType } from './HeadingProps';

const HEADING_STYLE_MAP: Record<HeadingType, string> = {
  h0: 'text-h0', // 56
  h1: 'text-h1', // 50
  h2: 'text-h2', // 40
  h3: 'text-h3', // 32
  h4: 'text-h4', // 28
  h5: 'text-h5', // 24
  h6: 'text-h6', // 20
};

export const Heading = JSX<HeadingProps>((props) => {
  const { className = '', headingType = 'h3', title, as: Tag = 'h3' } = props;

  return (
    <Tag
      className={`font-sans text-primary-text m-0 ${HEADING_STYLE_MAP[headingType]} ${className}`}
    >
      {title}
    </Tag>
  );
});
