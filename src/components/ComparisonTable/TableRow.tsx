import { JSX } from '@redneckz/uni-jsx';
import type { Row } from './ComparisonTableContent';
import { COLUMN_WIDTH, DIVIDER_CLASSES, FIRST_CELL_CLASSES } from './constants';
import { TableCarouselContainer } from './TableCarouselContainer';
import { TableCell } from './TableCell';
import { TableRowContainer } from './TableRowContainer';

export interface TableRowProps {
  className?: string;
  row: Row;
  activeCardIndex: number;
  isColoredFirstColumn: boolean;
  isFirstRow: boolean;
  isLastRow: boolean;
}

const titleStyle = (isLastRow = false) =>
  `text-s py-7 ${DIVIDER_CLASSES} ${FIRST_CELL_CLASSES} ${
    isLastRow ? 'border-b-0' : 'border-solid'
  }`;

export const TableRow = JSX<TableRowProps>(
  ({ row: { header, data }, activeCardIndex, isColoredFirstColumn, isFirstRow, isLastRow }) => (
    <TableRowContainer>
      {header?.title ? <div className={titleStyle(isLastRow)}>{header.title}</div> : null}
      {data?.length ? (
        <TableCarouselContainer activeCardIndex={activeCardIndex} columnWidth={COLUMN_WIDTH}>
          {data.map((cell, i) => (
            <TableCell
              key={String(i)}
              cell={cell}
              isFirstRow={isFirstRow}
              isLastRow={isLastRow}
              isFillGradient={isColoredFirstColumn && i === 0}
            />
          ))}
        </TableCarouselContainer>
      ) : null}
    </TableRowContainer>
  ),
);
