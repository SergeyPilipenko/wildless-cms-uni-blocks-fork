export interface RadioProps {
  name: string;
  text?: string;
  value: string;
  checked: boolean;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
