import { JSX } from '@redneckz/uni-jsx';
import { DescriptionProps } from './DescriptionProps';

export const Description = JSX<DescriptionProps>((props) => {
  const { className, description } = props;

  return <div className={`font-normal text-base ${className || ''}`}>{description}</div>;
});
