import { JSX } from '@redneckz/uni-jsx';
import type { CellData } from './ComparisonTableContent';
import { BORDER_CLASSES, DIVIDER_CLASSES, GRADIENT } from './constants';

export interface TableCellProps {
  cell: CellData[];
  isLastRow?: boolean;
  isFirstRow?: boolean;
  rowHeader?: string;
  isFillGradient: boolean;
}

export const TableCell = JSX<TableCellProps>(({ cell, isFirstRow, isLastRow, isFillGradient }) => {
  const cellWrapperClasses = `w-80 box-border flex flex-col ${BORDER_CLASSES} ${
    !isLastRow ? 'border-y-0' : 'border-t-0 rounded-b-md'
  } ${isFillGradient ? GRADIENT : ''}`;

  const cellClasses = `mx-7 h-full ${DIVIDER_CLASSES} ${
    isFillGradient && isFirstRow ? 'border-t' : ''
  } ${!isLastRow ? 'border-solid' : 'border-b-0'}`;

  return (
    <div className={cellWrapperClasses} role="cell">
      <div className={cellClasses}>
        {cell.map((item, i) => renderCellInner(item, i, isFillGradient))}
      </div>
    </div>
  );
});

const labelStyle = (isFillGradient = false): string =>
  `text-xl-light font-medium m-0 ${isFillGradient ? 'text-white' : ''}`;
const descriptionStyle = (isFillGradient = false): string =>
  `text-sm opacity-80 ${isFillGradient ? 'text-white' : 'text-secondary-text'}`;

const renderCellInner = ({ label, description }: CellData, i: number, isFillGradient: boolean) => (
  <div key={String(i)} className="first:pt-7 pt-6 last:pb-7">
    {label ? <h4 className={labelStyle(isFillGradient)}>{label}</h4> : null}
    {description ? <div className={descriptionStyle(isFillGradient)}>{description}</div> : null}
  </div>
);
