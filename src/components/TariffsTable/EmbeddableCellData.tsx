import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useState } from '@redneckz/uni-jsx/lib/hooks';
import { EventBus } from '../../EventBus/EventBus';
import { Button } from '../../ui-kit/Button/Button';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import { Img } from '../../ui-kit/Img/Img';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import { TableInnerButton, TableInnerButtonProps } from '../../ui-kit/InnerTable/InnerTableButton';
import { TariffsTableInnerEvent } from '../../ui-kit/InnerTable/InnerTableProps';
import { List } from '../../ui-kit/List/List';
import type { ListProps } from '../../ui-kit/List/ListProps';
import type { LabelDescriptionCell, TariffsTableCellIndexProps } from './TariffsTableContent';

export type EmbeddableCellDataType =
  | LabelDescriptionCell
  | ButtonContent
  | ImageContent
  | ListProps
  | TableInnerButtonProps;

const renderButtonsCellData = ({ buttons }: ButtonContent) =>
  buttons && buttons?.length ? (
    <div>
      {buttons.map(({ rounded, ...buttonProps }, idx) => (
        <Button
          className={`${idx > 0 && rounded ? 'ml-3' : ''} w-12 h-12`}
          key={String(idx)}
          rounded={rounded}
          {...buttonProps}
        />
      ))}
    </div>
  ) : null;

const renderLabelDescriptionCellData = ({ label, description }: LabelDescriptionCell) => {
  const labelClassName = `text-h6 m-0 ${description ? 'mb-1' : ''}`;

  return (
    <div>
      {label ? <div className={labelClassName}>{label}</div> : null}
      {description ? <div className="text-secondary-text text-l-light">{description}</div> : null}
    </div>
  );
};

const renderImgCellData = ({ image }: ImageContent) => (image?.src ? <Img image={image} /> : null);

const renderListCellData = ({ isDotted, ...rest }: ListProps) => (
  <List
    className="flex flex-col justify-between items-start text-h6"
    version="primary"
    isDotted={isDotted ?? true}
    {...rest}
  />
);

const renderTableCellData = JSX((props: TableInnerButtonProps) => {
  const [showBtn, setShowBtn] = useState(true);
  console.log(props);
  const tariffInnerTableSubscriber = (event: TariffsTableInnerEvent) => {
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
