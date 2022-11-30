import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { TariffsTableInnerContent } from '../../ui-kit/InnerTable/InnerTableProps';

import type { CellDef } from './TariffsTableContent';
import { renderCellInner } from './TariffsTableRenderCell';

export interface TariffTableContentProps {
  openTableInnerIdx?: number;
  setOpenTableInnerIdx: (props?: number) => void;
  setTableInner: (props?: TariffsTableInnerContent) => void;
  tableInner?: TariffsTableInnerContent;
}

export interface TariffsTableCellProps extends TariffTableContentProps, UniBlockProps {
  rowIdx: number;
  cellIdx: number;
  cells: CellDef[];
}

export const TariffsTableCell = JSX<TariffsTableCellProps>(
  ({
    context,
    cells,
    rowIdx,
    cellIdx,
    setTableInner,
    tableInner,
    openTableInnerIdx,
    setOpenTableInnerIdx,
  }) => {
    return (
      <div
        className="first:pl-0 w-80 flex-grow flex flex-col border-solid border-main-divider border border-t-0 border-x-0"
        role="cell"
      >
        {cells?.length
          ? cells.map(
              renderCellInner({
                rowIdx,
                context,
                cellIdx,
                setTableInner,
                tableInner,
                openTableInnerIdx,
                setOpenTableInnerIdx,
              }),
            )
          : null}
      </div>
    );
  },
);
