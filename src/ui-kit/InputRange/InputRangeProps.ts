import type { FuncReturnVoid } from '../../types';

export interface InputRangeProps {
  className?: string;
  items?: string[];
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  title?: string;
  onChange?: FuncReturnVoid<number>;
}
