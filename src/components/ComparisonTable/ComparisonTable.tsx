import { JSX } from '@redneckz/uni-jsx';
import { Heading } from '../../ui-kit/Heading/Heading';
import { FIRST_CELL_CLASSES } from './constants';
import { ComparisonTableBody } from './ComparisonTableBody';
import type { UniBlockProps } from '../../types';
import type { ComparisonTableContent } from './ComparisonTableContent';

export interface ComparisonTableProps extends ComparisonTableContent, UniBlockProps {}

export const ComparisonTable = JSX<ComparisonTableProps>(
  ({
    className,
    context,
    title,
    rowHeaders,
    columns,
    visibleRowLength = 0,
    isColoredFirstColumn = false,
  }) => {
    const [isShowAllRow, setIsShowAllRow] = context.useState(!visibleRowLength);
    const showToggle = () => setIsShowAllRow(!isShowAllRow);

    return (
      <section
        className={`bg-white font-sans py-[50px] pl-[50px] overflow-hidden text-primary-text relative ${
          className || ''
        }`}
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
      </section>
    );
  },
);

const renderShowMoreToggleButton = ({
  isShowAllRow,
  onClick,
}: {
  isShowAllRow: boolean;
  onClick?: (ev?: MouseEvent) => void;
}) => {
  return (
    <div className="pr-[50px]">
      <div className="flex w-full">
        <div className={FIRST_CELL_CLASSES} />
        <button
          onClick={onClick}
          className="mt-5 flex-1 border-main-stroke border-solid border text-primary-text bg-white hover:border-primary-main hover:text-primary-main"
        >
          <div className="font-sans font-medium text-xs py-[11px]">
            {!isShowAllRow ? 'Показать все параметры' : 'Скрыть'}
          </div>
        </button>
      </div>
    </div>
  );
};
