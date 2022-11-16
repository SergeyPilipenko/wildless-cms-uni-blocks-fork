import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../model/ContentPageDef';
import { renderArrows } from '../Button/renderArrows';
import type { RowsData } from './InnerTableProps';

const COLUMN_WIDTH = 140;

export interface InnerTableBodyItemProps extends UniBlockProps {
  rows?: RowsData[][];
}

export const InnerTableBodyItem = JSX<InnerTableBodyItemProps>(({ rows }) => {
  const [activeColumnIndex, setActiveColumnIndex] = useState(0);

  const handleNextClick = () => setActiveColumnIndex(activeColumnIndex + 1);
  const handlePrevClick = () => setActiveColumnIndex(activeColumnIndex - 1);

  const rowsLength = rows?.[0]?.length ?? 0;
  const showNextButton = rowsLength > 3 && rowsLength > activeColumnIndex + 4;

  const showPrevButton = activeColumnIndex > 0;

  return (
    <div>
      {rows?.map(renderRow(activeColumnIndex))}
      {renderArrows({
        handler: [handlePrevClick, handleNextClick],
        isShown: [showPrevButton, showNextButton],
        btnClass: ['right-3 top-24', 'right-3 top-2'],
        className: '',
      })}
    </div>
  );
});

const renderRow = (activeColumnIndex: number) => (rowData: RowsData[], rowIdx: number) => {
  if (!rowData?.length) {
    return null;
  }

  const [headerColumn, ...columns] = rowData;

  const transform = [...Array(activeColumnIndex).keys()].reduce(
    (res, i) => (columns?.[i]?.cols?.length ?? 1) * COLUMN_WIDTH + res,
    0,
  );

  const columnsClassName = [
    'flex duration-1000 text-center',
    rowIdx !== 0 ? 'font-normal' : 'font-light',
  ].join(' ');

  return (
    <div
      key={String(rowIdx)}
      className="flex border-main-divider border border-t-0 border-x-0 border-solid"
    >
      {headerColumn?.data ? (
        <div className={`text-xl-light w-[214px] pb-5 ${rowIdx === 0 ? 'pt-8' : 'pt-6'}`}>
          {headerColumn.data}
        </div>
      ) : null}
      <div className="flex flex-grow overflow-hidden">
        <div
          className={columnsClassName}
          style={{
            transform: `translateX(-${transform}px)`,
          }}
        >
          {columns?.map((_, i) => (
            <div
              key={`row${i}`}
              className="flex flex-col flex-grow justify-center pt-6 pb-5 odd:bg-main-divider"
            >
              {_?.data ? <div className="text-xl-light mb-3">{_.data}</div> : null}
              {_?.cols ? renderCols(_.cols, activeColumnIndex) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const renderCols = (cols: string[], rowIndex: number) =>
  cols?.length > 0 ? (
    <div className={`flex ${rowIndex} ${rowIndex === 0 ? 'text-secondary-text' : ''} last:mr-3`}>
      {cols.map((data, i) => (
        <div key={String(i)} className={`w-[76px] text-h6 mr-5 first:ml-8`}>
          {data}
        </div>
      ))}
    </div>
  ) : null;
