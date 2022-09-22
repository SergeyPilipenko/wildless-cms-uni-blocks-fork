import { JSX } from '@redneckz/uni-jsx';
import type { CellData } from './ComparisonTableContent';
import { DIVIDER_CLASSES } from './constants';

export interface TableCellProps {
  cell: CellData[];
  rowHeader?: string;
  isLastRow?: boolean;
  isFirstRow?: boolean;
  isFillGradient?: boolean;
}

export const TableCell = JSX<TableCellProps>(({ cell, rowHeader, isFillGradient = false }) => {
  const cellWrapperClasses = `box-border flex flex-col`;

  const cellClasses = `h-full ${DIVIDER_CLASSES}`;

  return (
    <div className={cellWrapperClasses} role="cell">
      <div className={cellClasses}>{cell.map(renderCellInner(isFillGradient, rowHeader))}</div>
    </div>
  );
});

const labelStyle = (isFillGradient = false): string =>
  `text-right ${isFillGradient ? 'text-white' : ''}`;
const descriptionStyle = (isFillGradient = false): string =>
  `text-right ${isFillGradient ? 'text-white/80' : 'text-secondary-text'}`;

const renderCellInner =
  (isFillGradient: boolean, rowHeader?: string) =>
  ({ label, description }: CellData, i: number) =>
    (
      <div key={String(i)} className="flex justify-between text-m-sm py-3.5">
        <div className={`${isFillGradient ? 'text-white/80' : 'text-secondary-text'}`}>
          {rowHeader}
        </div>
        <div className="basis-1/2">
          {label ? <div className={labelStyle(isFillGradient)}>{label}</div> : null}
          {description ? (
            <div className={descriptionStyle(isFillGradient)}>{description}</div>
          ) : null}
        </div>
      </div>
    );
