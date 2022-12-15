import type { LabelProps } from '../../model/HeadlineType';
import type { InputTypes } from '../../model/InputTypes';

export type InputProps = LabelProps & {
  className?: string;
  inputClassName?: string;
  id?: string;
  name?: string;
  type?: InputTypes;
  placeholder?: string;
  pattern?: string;
  value?: string;
  onChange: (value: string) => void;
  onBlur?: (value: string) => void;
  valid?: boolean;
};
