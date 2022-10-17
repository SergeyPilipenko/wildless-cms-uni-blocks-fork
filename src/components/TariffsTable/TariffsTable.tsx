import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import { useTableArrowScrollControl } from '../../hooks/useTableArrowScrollControl';
import type { VNode } from '../../model/VNode';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Foldable } from '../../ui-kit/Foldable/Foldable';
import { Heading } from '../../ui-kit/Heading/Heading';
import { TableArrowScrollControl } from '../../ui-kit/TableArrowScrollControl/TableArrowScrollControl';
import type { TableArrowScrollControlProps } from '../../ui-kit/TableArrowScrollControl/TableArrowScrollControlProps';
import { COLS_LENGTH_FOR_SCROLL } from './constants';
import type { TariffsTableContent } from './TariffsTableContent';
import { TariffsTableRow } from './TariffsTableRow';

export interface TariffsTableProps extends TariffsTableContent, UniBlockProps {}

export const TariffsTable = JSX<TariffsTableProps>(
  ({
    className = '',
    context,
    title,
    description,
    rowHeaders,
    tariffsColumns: columns,
    hiddenRowsNum = 0,
    ...rest
  }) => {
    const [activeCardIndex, setActiveCardIndex] = useState(0);

    const colData = columns?.map(({ data }) => data) || [];
    const rowData = rowHeaders?.map((header, i) => ({
      header,
      data: colData.map((col) => col?.[i] || []),
    }));

    const columnsLength = colData.length;

    const tableArrowScrollControlProps = useTableArrowScrollControl({
      columnsLength,
      colsLengthForScroll: COLS_LENGTH_FOR_SCROLL,
      activeCardIndex,
      setActiveCardIndex,
    });

    const foldableBlocks = rowData?.map((row, i, { length }) => (
      <TariffsTableRow
        context={context}
        key={String(i)}
        row={row}
        isLastRow={i + 1 === length}
        activeCardIndex={activeCardIndex}
        rowIdx={i}
      />
    ));

    return (
      <BlockWrapper
        className={`bg-white font-sans p-[50px] overflow-hidden text-primary-text relative ${
          columnsLength > 1 ? 'pr-0' : ''
        } ${className}`}
        context={context}
        {...rest}
      >
        {title ? (
          <Heading
            headingType="h2"
            className={`text-center ${description ? 'mb-2.5' : 'mb-9'}`}
            title={title}
          />
        ) : null}
        {description ? <div className="mb-9 text-center text-l">{description}</div> : null}
        {rowData?.length ? (
          <Foldable
            blocks={foldableBlocks}
            hiddenBlocksNum={hiddenRowsNum}
            context={context}
            render={(children) => (
              <Wrapper tableArrowScrollControlProps={tableArrowScrollControlProps}>
                {children}
              </Wrapper>
            )}
            foldButtonLabel="Развернуть"
          />
        ) : null}
      </BlockWrapper>
    );
  },
);

const Wrapper = JSX<
  {
    tableArrowScrollControlProps: TableArrowScrollControlProps;
  },
  any,
  VNode
>(({ children, tableArrowScrollControlProps }) => {
  const { isScrollAvailable } = tableArrowScrollControlProps;

  return (
    <div role="table">
      <div className="relative">
        {children}
        <TableArrowScrollControl {...tableArrowScrollControlProps} />
      </div>
      {isScrollAvailable ? (
        <div className="absolute top-0 right-0 bottom-0 w-[84px] bg-opacity-to-white" />
      ) : null}
    </div>
  );
});
