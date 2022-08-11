import { JSX } from '@redneckz/uni-jsx';
import { DescriptionContent } from './DescriptionContent';

export interface DescriptionProps extends DescriptionContent {
  className?: string;
}

export const Description = JSX<DescriptionProps>((props) => {
  const { className, description } = props;

  return <div className={`font-normal text-m-md ${className || ''}`}>{description}</div>;
});
