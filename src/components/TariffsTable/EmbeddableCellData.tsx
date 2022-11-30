import { JSX } from '@redneckz/uni-jsx';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import { renderButton } from '../../ui-kit/Button/ButtonSection';
import { Img } from '../../ui-kit/Img/Img';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import { TableInnerButton, TableInnerButtonProps } from '../../ui-kit/InnerTable/InnerTableButton';
import type { TariffsTableInnerContent } from '../../ui-kit/InnerTable/InnerTableProps';
import { List } from '../../ui-kit/List/List';
import type { ListProps } from '../../ui-kit/List/ListProps';
import type { LabelDescriptionCell } from './TariffsTableContent';

export type EmbeddableCellDataType =
  | LabelDescriptionCell
  | ButtonContent
  | ImageContent
  | ListProps
  | TableInnerButtonProps;

interface TableCellDataProps extends TableInnerButtonProps {
  isVisible?: boolean;
  displayTable: (props: TariffsTableInnerContent) => void;
}

const renderButtonsCellData = ({ buttons }: ButtonContent) =>
  buttons && buttons?.length ? (
    <div>
      {buttons.map(({ rounded, ...buttonProps }, idx) =>
        renderButton({
          button: { rounded, ...buttonProps },
          buttonClassName: `${idx > 0 && rounded ? 'ml-3' : ''} w-12 h-12`,
        }),
      )}
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

const renderTableCellData = JSX<TableCellDataProps>(
  ({ isVisible, displayTable, dataUrl, pdfUrl, isOpen, context }) => {
    return isVisible ? (
      <TableInnerButton
        isOpen={isOpen}
        context={context}
        onClick={() => {
          displayTable({ dataUrl, pdfUrl });
        }}
      />
    ) : null;
  },
);

export const EmbeddableCellData = {
  Buttons: renderButtonsCellData,
  Img: renderImgCellData,
  List: renderListCellData,
  LabelDescription: renderLabelDescriptionCellData,
  Table: renderTableCellData,
};
