import { JSX } from '@redneckz/uni-jsx';
import { Icon } from '../Icon/Icon';
import { useState, useEffect } from '@redneckz/uni-jsx/lib/hooks';

export interface OptionProps {
  key: string;
  text: string;
}

export interface SelectCustomProps {
  className?: string;
  label?: string;
  value?: OptionProps;
  onChange: (value: OptionProps) => void;
  options: OptionProps[];
  isBorder?: boolean;
}

export const SelectCustom = JSX<SelectCustomProps>(
  ({ className = '', isBorder = true, label, options = [], value, onChange }) => {
    const [selectedItem, setSelectedItem] = useState(options[0] || { key: '', text: '' });
    const [isOpen, setIsOpen] = useState(false);

    const choiceOption = (option: OptionProps) => {
      setSelectedItem(option);
      setIsOpen(false);
      onChange(option);
    };

    const isSelected = (option) => Boolean(option.key === selectedItem.key);

    useEffect(() => {
      setSelectedItem(value || { key: '', text: '' });
    }, [value]);

    return (
      <div className={`${isOpen ? 'z-10' : ''} ${className}`}>
        {label ? <span className="mb-2">{label}</span> : null}
        <div className={`relative w-fit`}>
          <div
            className={`text-m-light flex justify-between min-h-[56px] mb-0.5 p-4 pr-8 text-primary-text cursor-pointer
            ${getBorderStyle(isBorder)}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedItem.text}
            <Icon name="ArrowUpIcon" className={`absolute right-3 ${isOpen ? '' : 'rotate-180'}`} />
          </div>
          {options.length > 0 ? (
            <div className={`h-0 ${isOpen ? '' : 'overflow-hidden'}`}>
              <div className={`bg-white text-l rounded-md`}>
                {options.map(renderOption(choiceOption, isOpen, isSelected))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  },
);

const renderOption =
  (choiceOption, isOpen: boolean, isSelected) => (option: OptionProps, i: number) => {
    return (
      <div
        key={String(i)}
        onClick={() => {
          choiceOption(option);
        }}
        className="flex px-4 py-3 cursor-pointer hover:bg-main-divider pr-11"
      >
        <span>{option.text}</span>
        <Icon
          name="DoneSimpleIcon"
          className={['absolute right-4 pt-0.5', isSelected(option) && isOpen ? '' : 'hidden'].join(
            ' ',
          )}
        />
      </div>
    );
  };

function getBorderStyle(isBorder) {
  return isBorder ? 'border border-main-stroke rounded-md hover:border-primary-hover' : '';
}
