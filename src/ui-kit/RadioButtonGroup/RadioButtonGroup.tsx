import { JSX } from '@redneckz/uni-jsx';
import { Checkbox } from '../Checkbox/Checkbox';

export interface RadioButtonItem {
  id: string;
  text?: string;
}

interface RadioButtonGroupProps {
  items?: RadioButtonItem[];
  checkedItem?: string;
  onChange?: (id: string) => void;
}

export const RadioButtonGroup = JSX<RadioButtonGroupProps>(
  ({ items, checkedItem, onChange: onChangeCheckedItem }) => (
    <div className="flex flex-col gap-3">
      {items?.map(({ id, text }) => (
        <Checkbox
          key={String(id)}
          isRadio
          text={text}
          checked={checkedItem === id}
          onChange={() => onChangeCheckedItem && onChangeCheckedItem(id)}
        />
      ))}
    </div>
  ),
);
