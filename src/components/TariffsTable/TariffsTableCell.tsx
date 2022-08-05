import { JSX } from '@redneckz/uni-jsx';
import { BlockItem } from '../../ui-kit/BlockItem/BlockItem';
import { Button } from '../../ui-kit/Button/Button';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Img } from '../../ui-kit/Img';
import type { TariffsTableCellData } from './TariffsTableContent';

export interface TariffsTableCellProps {
  cell: TariffsTableCellData[];
  isLastRow: boolean;
}

export const TariffsTableCell = JSX<TariffsTableCellProps>(({ cell, isLastRow }) => {
  const cellWrapperClasses = `first:pl-0 pl-10 w-80 flex-grow flex flex-col border-solid border-main-divider border border-t-0 border-x-0 ${
    isLastRow ? 'border-t-0 rounded-b-md' : ''
  }`;

  return (
    <div className={cellWrapperClasses} role="cell">
      <div>{cell.map((item, i) => renderCellInner(item, i))}</div>
    </div>
  );
});

const renderCellInner = (
  { label, description, list, image, buttons }: TariffsTableCellData,
  i: number,
) => (
  <div key={String(i)} className="first:pt-5 last:pb-5">
    {i > 0 && (
      <div className="border-main-divider border border-solid border-t-0 border-x-0 my-4" />
    )}
    {label && <div className="text-xl font-medium m-0">{label}</div>}
    {description && <div className="text-sm text-secondary-text">{description}</div>}
    {list?.items?.length ? (
      <div className="flex flex-col justify-between items-start">
        <div role="list">
          {list.items.map((text, idx) => (
            <BlockItem
              className="text-sm"
              key={String(idx)}
              text={text}
              version="gray"
              isDotted={list.isDotted ?? true}
            />
          ))}
        </div>
      </div>
    ) : null}
    {image && <Img image={image} />}
    {buttons?.length
      ? buttons.map(({ icon, ...buttonProps }, idx) => (
          <Button
            className={`${idx > 0 ? 'ml-3' : ''} w-12 h-12`}
            key={String(idx)}
            appendLeft={icon && <Icon name={icon} width="24px" height="24px" asSVG />}
            {...buttonProps}
          />
        ))
      : null}
  </div>
);
