import { JSX } from '@redneckz/uni-jsx';
import type { ButtonVersion } from '../../model/ButtonVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import { Button } from '../../ui-kit/Button/Button';
import type { CellData, ColumnHeader } from './ComparisonTableContent';
import { GRADIENT } from './constants';
import { HeaderCell } from './HeaderCell';
import { TableCell } from './TableCell';

export interface TableColumnData {
  rowHeader?: string;
  cell: CellData[];
}

export interface TableColumnProps extends UniBlockProps {
  header?: ColumnHeader;
  columnData?: TableColumnData[];
  visibleRowLength?: number;
  isFillGradient?: boolean;
  showRow: boolean;
  onToggleColumn: () => void;
}

export const TableColumn = JSX<TableColumnProps>(
  ({ header, columnData, visibleRowLength = 0, isFillGradient, showRow, onToggleColumn }) => {
    const columnDataView = columnData?.slice(0, showRow ? columnData.length : visibleRowLength);
    const gradientClassName = isFillGradient ? GRADIENT : '';
    const buttonVersion: ButtonVersion = isFillGradient ? 'secondary' : 'primary';

    return (
      <div
        className={`border border-main-stroke rounded-md p-4 mb-3.5 ${gradientClassName}`}
        role="row"
      >
        <HeaderCell {...header} isFillGradient={isFillGradient} />
        {columnDataView?.length
          ? columnDataView.map(({ rowHeader, cell }, i) => (
              <TableCell
                key={String(i)}
                cell={cell}
                rowHeader={rowHeader}
                isFillGradient={isFillGradient}
              />
            ))
          : null}

        {showRow && header?.link ? (
          <Button
            href={header.link.href}
            target={header.link.target}
            version={buttonVersion}
            className="text-s font-medium mt-4 py-[11px]"
          >
            {header.link.text}
          </Button>
        ) : null}
        {renderToggleButton({ onToggleColumn, isFillGradient, showRow })}
      </div>
    );
  },
);

interface RenderToggleButtonProps {
  onToggleColumn: () => void;
  isFillGradient?: boolean;
  showRow: boolean;
}

const renderToggleButton = ({
  onToggleColumn,
  isFillGradient,
  showRow,
}: RenderToggleButtonProps) => (
  <div className="mt-5" role="cell">
    <a
      role="link"
      onClick={onToggleColumn}
      className={`text-s font-medium cursor-pointer ${
        isFillGradient ? 'text-white/80' : 'text-primary-main'
      }`}
    >
      {!showRow ? 'Показать описание' : 'Скрыть'}
    </a>
  </div>
);
