import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { HandlerDecorator, Router } from '../ContentPage/ContentPageContext';
import type { ColumnHeader } from './ComparisonTableContent';
import { COLUMN_WIDTH, FIRST_CELL_CLASSES } from './constants';
import { HeaderCell } from './HeaderCell';
import { TableCarouselContainer } from './TableCarouselContainer';
import { TableRowContainer } from './TableRowContainer';

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
        <div className={FIRST_CELL_CLASSES} role="columnheader" />
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
