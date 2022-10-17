import { JSX } from '@redneckz/uni-jsx';
import { EventBus } from '../../EventBus/EventBus';
import { UniBlockProps } from '../../types';
import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import type { TariffsTableInnerEvent } from './InnerTableProps';

export interface TableInnerButtonProps extends TariffsTableInnerEvent, UniBlockProps {
  isOpen?: boolean;
}

export const TableInnerButton = JSX<TableInnerButtonProps>(
  ({ isOpen, dataUrl, rowIdx, cellIdx, fieldIdx }) => {
    const handleClick = () => {
      EventBus.inst.fire('tariffInnerTable', { dataUrl, rowIdx, cellIdx, fieldIdx });
    };

    return (
      <Button
        version="primary"
        onClick={handleClick}
        className="w-full flex items-center justify-center rounded-none py-5 "
      >
        <div className="text-h4">{isOpen ? 'Скрыть' : 'Показать ставки по вкладу'}</div>
        <Icon
          name={isOpen ? 'ArrowUpIcon' : 'ArrowDownIcon'}
          className="ml-3"
          iconVersion="white"
          width="20"
          height="20"
          asSVG
        />
      </Button>
    );
  },
);
