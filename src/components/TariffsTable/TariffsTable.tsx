import { JSX } from '@redneckz/uni-jsx';
import { useCarouselControl } from '../../hooks/useCarousel';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { renderDefaultFoldButton } from '../../ui-kit/Foldable/DefaultFoldButton';
import { Foldable } from '../../ui-kit/Foldable/Foldable';
import { FoldableSection } from '../../ui-kit/Foldable/FoldableSection';
import { Heading } from '../../ui-kit/Heading/Heading';
import { TableArrowScrollControl } from '../../ui-kit/TableArrowScrollControl/TableArrowScrollControl';
import type { TableArrowScrollControlProps } from '../../ui-kit/TableArrowScrollControl/TableArrowScrollControlProps';
import { COLS_LENGTH_FOR_SCROLL } from './constants';
import type { TariffsTableContent } from './TariffsTableContent';
import { TariffsTableRow } from './TariffsTableRow';
import { renderArrows } from '../../ui-kit/Button/renderArrows';
import type { Controls } from '../../hooks/useCarousel';

export interface TariffsTableProps extends TariffsTableContent, UniBlockProps {}

interface WrapperProps {
  controls: Controls;
  isScrollAvailable: boolean;
}

export const TariffsTable = JSX<TariffsTableProps>(
  ({
    className = '',
    title,
    description,
    rowHeaders,
    tariffsColumns: columns,
    hiddenRowsNum = 0,
    ...rest
  }) => {
    const colData = columns?.map(({ data }) => data) || [];
    const rowData = rowHeaders?.map((header, i) => ({
      header,
      data: colData.map((col) => col?.[i] || []),
    }));

    const columnsLength = colData.length;

    const [activeIndex, controls] = useCarouselControl({
      itemsCount: colData.length,
      visibleItemCount: COLS_LENGTH_FOR_SCROLL,
    });

    const isScrollAvailable = colData.length > COLS_LENGTH_FOR_SCROLL;

    const rows = (rowData || []).map((row, i) => (
      <TariffsTableRow
        key={String(i)}
        row={row}
        activeCardIndex={activeIndex}
        rowIdx={i}
        {...rest}
      />
    ));
    const [visibleRows, hiddenRows] =
      hiddenRowsNum > 0 ? [rows.slice(0, -hiddenRowsNum), rows.slice(-hiddenRowsNum)] : [rows, []];

    return (
      <BlockWrapper
        className={`bg-white font-sans p-[50px] overflow-hidden text-primary-text relative ${
          columnsLength > 1 ? 'pr-0' : ''
        } ${className}`}
        {...rest}
      >
        {renderTitle({ title, description })}
        {renderDescription(description)}
        {hiddenRowsNum > 0 ? (
          <Foldable
            renderFoldableSection={({ isUnfolded }) => (
              <Wrapper controls={controls} isScrollAvailable={isScrollAvailable}>
                {visibleRows}
                <FoldableSection isUnfolded={isUnfolded}>{hiddenRows}</FoldableSection>
              </Wrapper>
            )}
            renderFoldButton={renderDefaultFoldButton}
          />
        ) : (
          <Wrapper controls={controls} isScrollAvailable={isScrollAvailable}>
            {rows}
          </Wrapper>
        )}
      </BlockWrapper>
    );
  },
);

function renderTitle({ title, description }: { title?: string; description?: string }) {
  return title ? (
    <Heading
      headingType="h3"
      className={`text-center ${description ? 'mb-2.5' : 'mb-8'}`}
      title={title}
    />
  ) : null;
}

function renderDescription(description?: string) {
  return description ? <div className="mb-9 text-center text-l">{description}</div> : null;
}

const Wrapper = JSX<WrapperProps>(({ children, controls, isScrollAvailable }) => {
  const { inc, dec, canDec, canInc } = controls;

  return (
    <div role="table">
      <div className="relative">
        {children}
        {isScrollAvailable ? (
          <div>
            {renderArrows({
              handler: [inc, dec],
              isShown: [canDec, canInc],
              btnClass: ['top-[108px]', 'top-11'],
              className: 'right-7',
            })}
          </div>
        ) : null}
      </div>
      {isScrollAvailable ? (
        <div className="absolute top-0 right-0 bottom-0 w-[84px] bg-opacity-to-white" />
      ) : null}
    </div>
  );
});
