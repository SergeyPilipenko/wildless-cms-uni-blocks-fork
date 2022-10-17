import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useState } from '@redneckz/uni-jsx/lib/hooks';
import { EventBus } from '../../EventBus/EventBus';
import { Button } from '../../ui-kit/Button/Button';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import { Img } from '../../ui-kit/Img/Img';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import { TableInnerButton, TableInnerButtonProps } from '../../ui-kit/InnerTable/InnerTableButton';
import { List } from '../../ui-kit/List/List';
import type { ListProps } from '../../ui-kit/List/ListProps';
import type { LabelDescriptionCell, TariffsTableCellIndexProps } from './TariffsTableContent';
import { getButtonAriaLabel } from './utils/getButtonAriaLabel';

export type EmbeddableCellDataType =
  | LabelDescriptionCell
  | ButtonContent
  | ImageContent
  | ListProps
  | TableInnerButtonProps;

const renderButtonsCellData = ({ buttons }: ButtonContent) =>
  buttons && buttons?.length ? (
    <div>
      {buttons.map(({ icon, rounded, ...buttonProps }, idx) => (
        <Button
          className={`${idx > 0 && rounded ? 'ml-3' : ''} w-12 h-12`}
          key={String(idx)}
          ariaLabel={getButtonAriaLabel(icon)}
          rounded={rounded}
          appendLeft={
            icon?.src || icon?.icon ? <Img image={icon} width="24px" height="24px" asSVG /> : null
          }
          {...buttonProps}
        />
      ))}
    </div>
  ) : null;

const renderLabelDescriptionCellData = ({ label, description }: LabelDescriptionCell) => {
  const labelClassName = `text-h6 font-medium m-0 ${description ? 'mb-1' : ''}`;

  return (
    <div>
      {label ? <div className={labelClassName}>{label}</div> : null}
      {description ? <div className="text-s text-secondary-text">{description}</div> : null}
    </div>
  );
};

const renderImgCellData = ({ image }: ImageContent) => (image?.src ? <Img image={image} /> : null);

const renderListCellData = ({ isDotted, ...rest }: ListProps) => (
  <List
    className="flex flex-col justify-between items-start text-sm"
    version="gray"
    isDotted={isDotted ?? true}
    {...rest}
  />
);

const renderTableCellData = JSX((props: TableInnerButtonProps) => {
  const [showBtn, setShowBtn] = useState(true);

  const tariffInnerTableSubscriber = (event) => {
    const _showBtn = (
      ['rowIdx', 'cellIdx', 'fieldIdx'] as Array<keyof TariffsTableCellIndexProps>
    ).every((key) => props[key] === event[key]);
    setShowBtn(!_showBtn);
  };

  useEffect(() => EventBus.inst.subscribe('tariffInnerTable', tariffInnerTableSubscriber), []);

  return showBtn ? <TableInnerButton {...props} /> : null;
});

export const EmbeddableCellData = {
  Buttons: renderButtonsCellData,
  Img: renderImgCellData,
  List: renderListCellData,
  LabelDescription: renderLabelDescriptionCellData,
  Table: renderTableCellData,
};
