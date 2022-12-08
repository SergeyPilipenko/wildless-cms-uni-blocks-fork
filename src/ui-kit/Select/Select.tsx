import { JSX } from '@redneckz/uni-jsx';
import { useCallback, useEffect, useState } from '@redneckz/uni-jsx/lib/hooks';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { Icon } from '../Icon/Icon';

export interface OptionProps {
  key: string;
  text: string;
}

export interface SelectProps {
  className?: string;
  label?: string;
  value?: OptionProps;
  onChange: (value: OptionProps) => void;
  options: OptionProps[];
  isBorder?: boolean;
  placeholder?: string;
}

export const Select = JSX<SelectProps>(
  ({ className = '', isBorder = true, label, options = [], value, onChange, placeholder = '' }) => {
    const [selectedItem, setSelectedItem] = useState(options[0] || { key: '', text: '' });
    const [isOpen, setIsOpen] = useState(false);

    const handleClickOutside = useCallback(() => setIsOpen(false), []);
    const wrapperRef = useOutsideClick<HTMLDivElement>(handleClickOutside);

    const choiceOption = (option: OptionProps) => {
      setSelectedItem(option);
      setIsOpen(false);
      onChange(option);
    };

    const isSelected = (option: OptionProps) => Boolean(option.key === selectedItem.key);

    useEffect(() => {
      setSelectedItem(value || { key: '', text: '' });
    }, [value]);

    return (
      <div className={`${className}`} ref={wrapperRef}>
        {label ? <span className="mb-2 flex text-primary-text">{label}</span> : null}
        <div className={`relative ${isOpen ? 'z-20' : 'z-10'}`}>
          <div
            className={`text-l flex justify-between items-center mb-0.5 text-primary-text cursor-pointer
            ${getBorderStyle(isBorder)}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <p className="p-4 pr-8 h-[56px] overflow-hidden text-ellipsis whitespace-nowrap">
              {selectedItem?.text || placeholder}
            </p>
            <Icon
              name="ArrowUpIcon"
              width="16"
              height="16"
              className={`absolute right-3 ${isOpen ? '' : 'rotate-180'}`}
            />
          </div>
          {options?.length ? (
            <div className={`h-0 ${renderOptionsStyle(isOpen)}`}>
              <div
                className={`bg-white text-l max-h-[256px] overflow-y-auto overflow-x-hidden rounded-md shadow-[0_4px_25px_rgba(0,0,0,0.07)]`}
              >
                {options.map(renderOption(choiceOption, isOpen, isSelected))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  },
);

const renderOptionsStyle = (isOpen: boolean) => (isOpen ? '' : 'overflow-hidden');

const renderOption =
  (
    choiceOption: (option: OptionProps) => void,
    isOpen: boolean,
    isSelected: (option: OptionProps) => boolean,
  ) =>
  (option: OptionProps, i: number) => {
    return (
      <div
        key={String(i)}
        onClick={() => {
          choiceOption(option);
        }}
        className="flex px-4 py-3 cursor-pointer hover:bg-main-divider pr-11 relative"
      >
        <span className="min-h-6">{option.text}</span>
        <Icon
          name="DoneSimpleIcon"
          width="16"
          height="16"
          className={['absolute right-4 pt-0.5', isSelected(option) && isOpen ? '' : 'hidden'].join(
            ' ',
          )}
        />
      </div>
    );
  };

const getBorderStyle = (isBorder: boolean) =>
  isBorder ? 'border border-main-stroke rounded-md hover:border-primary-hover' : '';
