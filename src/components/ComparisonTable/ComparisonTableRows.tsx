import { JSX } from '@redneckz/uni-jsx';
import type { TitleProps } from '../../model/HeadlineType';
import type { CellData } from './ComparisonTableContent';
import { TableRow } from './TableRow';
import type { Controls } from '../../hooks/useCarousel';
import { renderArrows } from '../../ui-kit/Button/renderArrows';

type ComparisonTableRowsProps = {
  rowData: { header: TitleProps; data: CellData[][] }[];
  activeCardIndex: number;
  isColoredFirstColumn: boolean;
  controls: Controls;
  isScrollAvailable: boolean;
};

export const ComparisonTableRows = JSX<ComparisonTableRowsProps>(
  ({ rowData, isColoredFirstColumn, activeCardIndex, controls, isScrollAvailable }) => {
    const { inc, dec, canDec, canInc } = controls;

    return (
      <div className="relative">
        {rowData.map((row, i, { length }) => (
          <TableRow
            key={String(i)}
            row={row}
            isFirstRow={i === 0}
            isLastRow={i + 1 === length}
            activeCardIndex={activeCardIndex}
            isColoredFirstColumn={isColoredFirstColumn}
          />
        ))}
        {isScrollAvailable ? (
          <div>
            {renderArrows({
              handler: [inc, dec],
              isShown: [canDec, canInc],
              btnClass: ['top-[108px]', 'top-11'],
              className: 'right-7',
              isDisabled: true,
            })}
          </div>
        ) : null}
      </div>
    );
  },
);
