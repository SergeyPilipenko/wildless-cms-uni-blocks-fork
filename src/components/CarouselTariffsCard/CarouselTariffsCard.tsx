import { JSX } from '@redneckz/uni-jsx';
import type { HeadlineCommonProps } from '../../model/HeadlineType';
import type { UniBlockProps } from '../../model/JSXBlock';
import { VNode } from '../../model/VNode';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Button } from '../../ui-kit/Button/Button';
import { Foldable } from '../../ui-kit/Foldable/Foldable';
import { FoldablePartProps } from '../../ui-kit/Foldable/FoldablePartProps';
import { FoldableSection } from '../../ui-kit/Foldable/FoldableSection';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Img } from '../../ui-kit/Img/Img';
import type { CarouselTariffsCardContent } from './CarouselTariffsCardContent';

export interface CarouselTariffsCardProps extends CarouselTariffsCardContent, UniBlockProps {}

export const CarouselTariffsCard = JSX<CarouselTariffsCardProps>(
  ({ className = '', title, icon, isHighlighting, button, rows = [], ...rest }) => {
    const hitStyle = getHitStyle(Boolean(isHighlighting));
    const rowsNode = rows.map(renderCardInfo);
    const VISIBLE_ROWS_COUNT = 1;
    const [visibleRows, hiddenRows] = [
      rowsNode.slice(0, VISIBLE_ROWS_COUNT),
      rowsNode.slice(VISIBLE_ROWS_COUNT),
    ];

    return (
      <BlockWrapper
        className={`font-sans bg-white p-[50px] p-8 border border-main-stroke relative w-[322px] min-w-[322px] -ml-[1px] ${hitStyle} ${className}`}
        {...rest}
      >
        {isHighlighting ? renderHitIcon() : null}
        {icon?.src ? <Img className="flex justify-center" image={icon} /> : null}
        {title ? (
          <Heading className="text-primary-text text-center pt-2" headingType="h5" title={title} />
        ) : null}
        {button ? <Button className="w-full mt-4" {...button} /> : null}
        {rows?.length ? (
          <Foldable
            renderFoldableSection={({ isUnfolded }) => (
              <div>
                {visibleRows}
                <FoldableSection isUnfolded={isUnfolded}>{hiddenRows}</FoldableSection>
              </div>
            )}
            renderFoldButton={rows.length > 1 ? renderFoldButton : null}
          />
        ) : null}
      </BlockWrapper>
    );
  },
);

const getHitStyle = (isHighlighting: boolean): string =>
  isHighlighting ? 'mt-9 pt-[71px]' : 'mt-[70px] pt-9';

const renderFoldButton = ({ isUnfolded, onToggle }: FoldablePartProps): VNode => (
  <button
    className="w-full cursor-pointer text-primary-main pt-5 flex justify-between items-center"
    onClick={onToggle}
  >
    <div>{isUnfolded ? 'Скрыть' : 'Подробнее о тарифе'}</div>
    <Icon
      className="text-primary-text"
      name={isUnfolded ? 'ArrowUpIcon' : 'ArrowDownIcon'}
      width="16"
      height="16"
      asSVG
    />
  </button>
);

const renderCardInfo = (cell: HeadlineCommonProps): VNode => (
  <div className="py-5 border-b border-main-divider flex flex-col gap-1">
    {cell?.title ? (
      <div className="text-secondary-text text-m-light opacity-80">{cell.title}</div>
    ) : null}
    {cell?.description ? <div className="text-primary-text text-h6">{cell.description}</div> : null}
  </div>
);

const renderHitIcon = (): VNode => {
  const POSITION_STYLE = 'absolute -top-7 -right-4';

  return (
    <div
      className={`h-[60px] w-[60px] bg-white flex flex-col items-center justify-center shadow-[0_4px_25px_rgba(0,0,0,0.07)] ${POSITION_STYLE}`}
    >
      <Icon iconVersion="black" name="HeartIcon" width="23" height="22" asSVG />
      <div className="text-center">Хит</div>
    </div>
  );
};
