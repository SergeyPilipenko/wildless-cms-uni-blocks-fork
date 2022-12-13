import { JSX } from '@redneckz/uni-jsx';
import { renderArrows } from '../Button/renderArrows';
import type { TableArrowScrollControlProps } from './TableArrowScrollControlProps';

export const TableArrowScrollControl = JSX<TableArrowScrollControlProps>(
  ({ isScrollAvailable, onNextClick, onPrevClick, showNextButton, showPrevButton }) => {
    return isScrollAvailable ? (
      <div>
        {renderArrows({
          handler: [onPrevClick, onNextClick],
          isShown: [showPrevButton, showNextButton],
          btnClass: ['top-[108px]', 'top-11'],
          className: 'right-7',
          isDisabled: true,
        })}
      </div>
    ) : null;
  },
);
