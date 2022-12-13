import { useEffect, useState } from '@redneckz/uni-jsx/lib/hooks';
import type { TariffsTableInnerContent } from '../../ui-kit/InnerTable/InnerTableProps';
import { EmbeddableCellData } from './EmbeddableCellData';
import type { TariffTableContentProps } from './TariffsTableCell';
import type { CellDef } from './TariffsTableContent';

interface TariffTableCellInnerProps extends TariffTableContentProps {
  cellIdx: number;
  rowIdx: number;
}

interface RenderCellProps {
  cell: CellDef;
  cellProps: CellProps;
}

interface CellProps {
  isVisible?: boolean;
  cellIdx: number;
  rowIdx: number;
  fieldIdx: number;
  displayTable: (props: TariffsTableInnerContent) => void;
}

export const renderCellInner =
  ({
    rowIdx,
    cellIdx,
    setTableInner,
    tableInner,
    openTableInnerIdx,
    setOpenTableInnerIdx,
  }: TariffTableCellInnerProps) =>
  (cell: CellDef, i: number) => {
    const [isVisible, setVisibility] = useState(true);

    useEffect(() => {
      if (cellIdx !== openTableInnerIdx || !tableInner) {
        setVisibility(true);
      }
    }, [tableInner, openTableInnerIdx]);

    const displayTable = (props: TariffsTableInnerContent) => {
      setVisibility(false);
      setOpenTableInnerIdx(cellIdx);
      setTableInner(props);
    };

    return (
      <div
        key={String(i)}
        className={cell?.tableCellType === 'Table' ? 'ml-10' : `first:pt-5 last:pb-5 pl-10`}
      >
        {i > 0 ? <div className="h-5" /> : null}
        {renderCell({
          cell,
          cellProps: {
            rowIdx,
            cellIdx,
            fieldIdx: i,
            displayTable,
            isVisible,
          },
        })}
      </div>
    );
  };

const renderCell = ({ cell, cellProps }: RenderCellProps) => {
  if (!cell) {
    return null;
  }

  const { tableCellType: type, ...rest } = cell;

  if (!type || !(type in EmbeddableCellData)) {
    return null;
  }

  const EmbeddableCellInner = EmbeddableCellData[type];

  return <EmbeddableCellInner {...cellProps} {...rest} />;
};
