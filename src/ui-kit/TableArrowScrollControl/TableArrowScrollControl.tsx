import { JSX } from '@redneckz/uni-jsx';
import { ArrowButton } from '../Button/ArrowButton';
import type { TableArrowScrollControlProps } from './TableArrowScrollControlProps';

export const TableArrowScrollControl = JSX<TableArrowScrollControlProps>(
  ({ isScrollAvailable, onNextClick, onPrevClick, showNextButton, showPrevButton }) => {
    return isScrollAvailable ? (
      <div>
        <div className="absolute top-7 right-7 z-10">
          <ArrowButton
            onClick={onNextClick}
            disabled={!showNextButton}
            ariaLabel="Пролистать вправо"
          />
          <ArrowButton
            className="mt-4 rotate-180"
            onClick={onPrevClick}
            disabled={!showPrevButton}
            ariaLabel="Пролистать влево"
          />
        </div>
      </div>
    ) : null;
  },
);
