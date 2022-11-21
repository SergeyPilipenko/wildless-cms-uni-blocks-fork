import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import { ComparisonTableBody } from './ComparisonTableBody';
import type { ComparisonTableContent } from './ComparisonTableContent';
import { FIRST_CELL_CLASSES } from './constants';

export interface ComparisonTableProps extends ComparisonTableContent, UniBlockProps {}

export const ComparisonTable = JSX<ComparisonTableProps>(
  ({
    className = '',
    context,
    title,
    rowHeaders,
    columns,
    visibleRowLength = 0,
    isColoredFirstColumn = false,
    ...rest
  }) => {
    const [isShowAllRow, setIsShowAllRow] = useState(!visibleRowLength);
    const showToggle = () => setIsShowAllRow(!isShowAllRow);

    return (
      <BlockWrapper
        context={context}
        className={`bg-white font-sans py-[50px] pl-[50px] overflow-hidden text-primary-text relative ${className}`}
        {...rest}
      >
        <Heading
          headingType="h2"
          className="max-w-[47rem] text-center mb-9 mx-auto"
          title={title}
        />
        <ComparisonTableBody
          context={context}
          columns={columns}
          rowHeaders={rowHeaders}
          isShowAllRow={isShowAllRow}
          isColoredFirstColumn={isColoredFirstColumn}
          visibleRowLength={visibleRowLength}
        />
        {visibleRowLength
          ? renderShowMoreToggleButton({ isShowAllRow, onClick: showToggle })
          : null}
      </BlockWrapper>
    );
  },
);

const renderShowMoreToggleButton = ({
  isShowAllRow,
  onClick,
}: {
  isShowAllRow: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="pr-[50px]">
      <div className="flex w-full">
        <div className={FIRST_CELL_CLASSES} />
        <button
          onClick={onClick}
          className="mt-5 flex-1 border-main-stroke border-solid border text-primary-text bg-white hover:border-primary-main hover:text-primary-main"
        >
          <div className="font-sans text-xs-light font-medium py-3">
            {!isShowAllRow ? 'Показать все параметры' : 'Скрыть'}
          </div>
        </button>
      </div>
    </div>
  );
};
