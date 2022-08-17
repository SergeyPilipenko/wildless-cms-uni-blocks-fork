import { JSX } from '@redneckz/uni-jsx';
import { TableRowContainer } from './TableRowContainer';
import { COLUMN_WIDTH, FIRST_CELL_CLASSES } from './constants';
import { TableCarouselContainer } from './TableCarouselContainer';
import { HeaderCell } from './HeaderCell';
import { useLink } from '../../hooks/useLink';
import type { ColumnHeader } from './ComparisonTableContent';
import type { HandlerDecorator, Router } from '../ContentPage/ContentPageContext';

interface ComparisonTableColumnHeadersProps {
  colHeaders: ColumnHeader[];
  activeCardIndex: number;
  router: Router;
  handlerDecorator: HandlerDecorator | undefined;
}

export const ComparisonTableColumnHeaders = JSX<ComparisonTableColumnHeadersProps>(
  ({ colHeaders, activeCardIndex, router, handlerDecorator }) => {
    return (
      <TableRowContainer>
        <div className={FIRST_CELL_CLASSES} role="columnheader" scope="col" />
        <TableCarouselContainer activeCardIndex={activeCardIndex} columnWidth={COLUMN_WIDTH}>
          {colHeaders.map((header, i) => (
            <HeaderCell
              key={String(i)}
              {...header}
              link={header.link && useLink({ router, handlerDecorator }, header.link)}
            />
          ))}
        </TableCarouselContainer>
      </TableRowContainer>
    );
  },
);
