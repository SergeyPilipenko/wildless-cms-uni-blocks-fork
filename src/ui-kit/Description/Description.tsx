import { JSX } from '@redneckz/uni-jsx';
import type { DescriptionProps } from '../../model/HeadlineType';

export interface DescriptionCommonProps extends DescriptionProps {
  className?: string;
}

export const Description = JSX<DescriptionCommonProps>((props) => {
  const { className = '', description } = props;

  return <div className={`${className}`}>{description}</div>;
});
