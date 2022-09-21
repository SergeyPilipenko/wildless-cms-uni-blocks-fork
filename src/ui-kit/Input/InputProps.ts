import type { InputTypes } from '../../model/InputTypes';

export interface InputProps {
  className?: string;
  id?: string;
  name?: string;
  type?: InputTypes;
  placeholder?: string;
  pattern?: string;
  value: string;
  onChange: (value: string) => void;
}
