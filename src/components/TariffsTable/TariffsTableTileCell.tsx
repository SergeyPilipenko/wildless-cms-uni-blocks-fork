import { JSX } from '@redneckz/uni-jsx';
import { TableTileHeader } from './TableTileHeader';
import { BlockItem } from '../../ui-kit/BlockItem/BlockItem';
import { Img } from '../../ui-kit/Img/Img';
import { Button } from '../../ui-kit/Button/Button';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { TariffsTableCellData, TariffsTableTileCellProps } from './TariffsTableContent';

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
    {list?.items?.length ? (
      <div className="flex flex-col justify-between items-start">
        <div role="list">
          {list.items.map((text, idx) => (
            <BlockItem
              className="text-m-sm"
              key={String(idx)}
              text={text}
              version="gray"
              isDotted={list.isDotted ?? true}
            />
          ))}
        </div>
      </div>
    ) : null}
    {image && <Img image={{ ...image, className: 'm-0' }} />}
    {buttons?.length ? (
      <div>
        {buttons.map(({ icon, rounded, ...buttonProps }, idx) => (
          <Button
            className={`mt-3 ${idx > 0 && rounded ? 'ml-2.5' : ''} ${icon ? 'w-12 h-12' : ''}`}
            key={String(idx)}
            rounded={rounded}
            appendLeft={icon && <Icon name={icon} width="24px" height="24px" asSVG />}
            {...buttonProps}
            aria-label={icon}
          />
        ))}
      </div>
    ) : null}
  </div>
);
