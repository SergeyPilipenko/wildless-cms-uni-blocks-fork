import type { InputTypes } from '../../model/InputTypes';
import type { LabelProps } from '../../model/HeadlineType';

export type InputProps = LabelProps & {
  className?: string;
  label?: string;
  inputClassName?: string;
  id?: string;
  name?: string;
  type?: InputTypes;
  placeholder?: string;
  pattern?: string;
  value?: string;
  onChange: (value: string) => void;
};
