import { JSX } from '@redneckz/uni-jsx';
import { Button } from '../../ui-kit/Button/Button';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { TableTileHeader } from './TableTileHeader';
import type {
  TariffsTableCellData,
  TariffsTableList,
  TariffsTableTileCellProps,
} from './TariffsTableContent';
import { getButtonAriaLabel } from './utils/getButtonAriaLabel';

export const TariffsTableTileCell = JSX<TariffsTableTileCellProps>(({ header, data }) => {
  return (
    <div className="rounded-md border-main-stroke h-full box-border border p-4">
      <TableTileHeader {...header} />
      {data?.length ? data.map(renderCellInner) : null}
    </div>
  );
});

const renderCellInner = (
  { label, description, list, image, buttons }: TariffsTableCellData,
  i: number,
) => (
  <div key={String(i)}>
    {i > 0 && (
      <div className="border-main-divider border border-solid border-t-0 border-x-0 my-2" />
    )}
    {label ? <div className="text-m-sm m-0">{label}</div> : null}
    {description ? (
      <div className="text-m-sm text-secondary-text mt-[3px]">{description}</div>
    ) : null}
    {list?.items?.length ? renderList(list) : null}
    {image && <Img image={{ ...image, className: 'm-0' }} />}
    {buttons?.length ? renderButtons(buttons) : null}
  </div>
);

const renderList = (list: TariffsTableList) => (
  <List
    className="flex flex-col justify-between items-start text-m-sm"
    version="gray"
    items={list.items}
    isDotted={list.isDotted ?? true}
  />
);

const renderButtons = (buttons: ButtonWithIconProps[]) => (
  <div>
    {buttons.map(({ icon, rounded, ...buttonProps }, idx) => (
      <Button
        className={`mt-3 ${idx > 0 && rounded ? 'ml-2.5' : ''} ${icon ? 'w-12 h-12' : ''}`}
        key={String(idx)}
        ariaLabel={getButtonAriaLabel(icon)}
        rounded={rounded}
        appendLeft={icon ? <Img image={icon} width="24px" height="24px" asSVG /> : null}
        {...buttonProps}
        aria-label={icon}
      />
    ))}
  </div>
);
