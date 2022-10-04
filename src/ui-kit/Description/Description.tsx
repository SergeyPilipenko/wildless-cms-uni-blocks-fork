import { JSX } from '@redneckz/uni-jsx';
import type { DescriptionProp } from '../../model/HeadlineType';

export interface DescriptionProps extends DescriptionProp {
  className?: string;
}

export const Description = JSX<DescriptionProps>((props) => {
  const { className = '', description } = props;

  return <div className={`${className}`}>{description}</div>;
});
