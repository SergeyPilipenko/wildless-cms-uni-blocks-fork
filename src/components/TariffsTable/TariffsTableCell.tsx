import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import { EmbeddableCellData } from './EmbeddableCellData';
import type { CellDef, TariffsTableCellIndexProps } from './TariffsTableContent';

export interface TariffsTableCellProps extends UniBlockProps {
  rowIdx: number;
  cellIdx: number;
  cells: CellDef[];
  isLastRow: boolean;
}

export const TariffsTableCell = JSX<TariffsTableCellProps>(
  ({ context, cells, isLastRow, rowIdx, cellIdx }) => {
    const cellWrapperClasses = `first:pl-0 w-80 flex-grow flex flex-col border-solid border-main-divider border border-t-0 border-x-0 ${
      isLastRow ? 'border-t-0 rounded-b-md' : ''
    }`;

    return (
      <div className={cellWrapperClasses} role="cell">
        {cells.map(renderCellInner(rowIdx, context, cellIdx))}
      </div>
    );
  },
);

const renderCellInner =
  (rowIdx: number, context: ContentPageContext, cellIdx: number) => (cell: CellDef, i: number) => {
    return (
      <div
        key={String(i)}
        className={cell?.tableCellType === 'Table' ? 'mx-0.5' : `first:pt-5 last:pb-5 pl-10`}
      >
        {i > 0 ? <div className="h-5" /> : null}
        {renderCell(cell, context, { rowIdx, cellIdx, fieldIdx: i })}
      </div>
    );
  };

const renderCell = (
  cell: CellDef,
  context: ContentPageContext,
  indexes: TariffsTableCellIndexProps,
) => {
  if (!cell) {
    return null;
  }

  const { tableCellType: type, ...rest } = cell;

  if (!type || !(type in EmbeddableCellData)) {
    return null;
  }

  const EmbeddableCellInner = EmbeddableCellData[type];

  return <EmbeddableCellInner context={context} {...rest} {...indexes} />;
};
