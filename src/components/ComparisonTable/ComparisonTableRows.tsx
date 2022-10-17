import { JSX } from '@redneckz/uni-jsx';
import type { TitleProps } from '../../model/HeadlineType';
import { TableArrowScrollControl } from '../../ui-kit/TableArrowScrollControl/TableArrowScrollControl';
import type { TableArrowScrollControlProps } from '../../ui-kit/TableArrowScrollControl/TableArrowScrollControlProps';
import type { CellData } from './ComparisonTableContent';
import { TableRow } from './TableRow';

type ComparisonTableRowsProps = TableArrowScrollControlProps & {
  rowData: { header: TitleProps; data: CellData[][] }[];
  activeCardIndex: number;
  isColoredFirstColumn: boolean;
};

export const ComparisonTableRows = JSX<ComparisonTableRowsProps>(
  ({ rowData, activeCardIndex, isColoredFirstColumn, ...tableArrowScrollProps }) => {
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
        <TableArrowScrollControl {...tableArrowScrollProps} />
      </div>
    );
  },
);
