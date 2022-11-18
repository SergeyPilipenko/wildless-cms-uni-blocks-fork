import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { List } from '../../ui-kit/List/List';
import { joinList } from '../../utils/joinList';
import type {
  InvestmentCell,
  InvestmentCellColor,
  InvestmentCellSize,
  InvestmentColumn,
  InvestmentInfoContent,
  InvestmentZeroColumn,
} from './InvestmentInfoContent';

const investmentCellColorMap: Record<InvestmentCellColor, string> = {
  yellow: 'bg-yellow',
  green: 'bg-green',
  'green-light': 'bg-green-light',
  'green-dark': 'bg-green-dark',
};

const investmentCellSizeMap: Record<InvestmentCellSize, string> = {
  XS: 'h-[40px]',
  S: 'h-[68px]',
  M: 'h-[102px]',
  L: 'h-[136px]',
  XL: 'h-[204px]',
};

export interface InvestmentInfoProps extends InvestmentInfoContent, UniBlockProps {}

export const InvestmentInfo = JSX<InvestmentInfoProps>((props) => {
  const {
    context,
    className = '',
    items,
    isDotted,
    investmentZeroColumn,
    investmentColumns,
    ...rest
  } = props;
  const colums = investmentColumns ? [...investmentColumns] : [];
  if (investmentZeroColumn) {
    colums.unshift(investmentZeroColumn);
  }

  return (
    <BlockWrapper
      className={`font-sans bg-white p-9 pb-9 ${className}`}
      context={context}
      {...rest}
    >
      <div className="container text-m-light">
        {colums?.length ? (
          <div>
            <div className="flex items-end px-9 text-white">
              {joinList(<div className="w-px h-4 bg-main-stroke" />)(
                colums.map(renderInvestmentColumn),
              )}
              <div className="w-px h-4 bg-main-stroke" />
            </div>
            <div className="border-t border-main-stroke -mt-2 mx-9" />
            <div className="flex justify-between mt-3 -mx-10">
              {colums.map(renderInvestmentColumnTitle)}
            </div>
          </div>
        ) : null}

        {items?.length ? (
          <List
            className="mt-9 text-h6"
            items={items}
            itemClassName="mb-[7px]"
            isDotted={isDotted}
          />
        ) : null}
      </div>
    </BlockWrapper>
  );
});

const renderInvestmentColumn = (
  column: InvestmentColumn | InvestmentZeroColumn,
  i: number,
  arr: Array<InvestmentColumn>,
) => {
  const isSecondColumn = i === 1;
  const isLastColumn = i === arr.length - 1;

  return (
    <div
      key={`column_${i}`}
      className={`${getColumnClasses(isSecondColumn, isLastColumn, column.cells)}`}
    >
      {column.cells?.length ? (
        <div className={`w-full ${isLastColumn ? 'border-4 border-green-more-dark p-1' : ''}`}>
          {column.cells.map(renderInvestmentCell)}
        </div>
      ) : null}
    </div>
  );
};

const getColumnClasses = (
  isSecondColumn: boolean,
  isLastColumn: boolean,
  cells: InvestmentCell[] = [],
): string =>
  [
    cells.length ? 'flex-1' : 'flex-0',
    cells.length && !isSecondColumn && !isLastColumn ? 'pl-2.5' : '',
    cells.length && !isLastColumn ? 'pr-2.5 pb-8' : 'pb-6',
  ].join(' ');

const renderInvestmentCell = (cell: InvestmentCell, i: number) => {
  const cellSize = cell.cellSize || 'XS';
  const cellColor = cell.cellColor || 'green';

  return cell.text ? (
    <div
      key={`cell_${i}`}
      className={`flex-1 flex items-center justify-center relative py-2 ${
        investmentCellSizeMap[cellSize]
      } ${investmentCellColorMap[cellColor]} ${cellSize === 'XS' ? 'px-3' : 'px-11'}`}
    >
      <div className="text-center">{cell.text}</div>
    </div>
  ) : null;
};

const renderInvestmentColumnTitle = (
  column: InvestmentColumn | InvestmentZeroColumn,
  i: number,
  arr: Array<InvestmentColumn>,
) => {
  const isFirstColumn = i === 0;
  const isLastColumn = i === arr.length - 1;

  return (
    <div
      key={`title_${i}`}
      className={`flex-1 max-w-[180px] text-center px-2 ${isFirstColumn ? 'pl-9' : ''} ${
        isLastColumn ? 'pr-9' : ' '
      }`}
    >
      {column.title}
    </div>
  );
};
