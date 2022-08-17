import { JSX } from '@redneckz/uni-jsx';
import { TableRow } from './TableRow';
import { TableArrowScrollControl } from '../../ui-kit/TableArrowScrollControl/TableArrowScrollControl';
import type { TableArrowScrollControlProps } from '../../ui-kit/TableArrowScrollControl/TableArrowScrollControlProps';
import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';
import type { CellData } from './ComparisonTableContent';

type ComparisonTableRowsProps = TableArrowScrollControlProps & {
  rowData: { header: HeadingContent; data: CellData[][] }[];
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
