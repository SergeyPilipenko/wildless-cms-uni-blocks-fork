export interface CheckboxProps {
  text?: string;
  checked?: boolean;
  className?: string;
  isRadio?: boolean;
  onChange?: (value: boolean) => void;
}
