import { JSX } from '@redneckz/uni-jsx';
import { Button } from '../../ui-kit/Button/Button';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import type { TariffsTableCellData, TariffsTableList } from './TariffsTableContent';
import { getButtonAriaLabel } from './utils/getButtonAriaLabel';

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
      <div>{cell.map(renderCellInner)}</div>
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
    {label ? <div className="text-xl font-medium m-0">{label}</div> : null}
    {description ? <div className="text-sm text-secondary-text">{description}</div> : null}
    {list?.items?.length ? renderList(list) : null}
    {image ? <Img image={image} /> : null}
    {buttons?.length ? renderButtons(buttons) : null}
  </div>
);

const renderList = (list: TariffsTableList) => (
  <List
    className="flex flex-col justify-between items-start text-sm"
    version="gray"
    items={list.items}
    isDotted={list.isDotted ?? true}
  />
);

const renderButtons = (buttons: ButtonWithIconProps[]) => (
  <div>
    {buttons.map(({ icon, rounded, ...buttonProps }, idx) => (
      <Button
        className={`${idx > 0 && rounded ? 'ml-3' : ''} w-12 h-12`}
        key={String(idx)}
        ariaLabel={getButtonAriaLabel(icon)}
        rounded={rounded}
        appendLeft={icon ? <Img image={icon} width="24px" height="24px" asSVG /> : null}
        {...buttonProps}
      />
    ))}
  </div>
);
