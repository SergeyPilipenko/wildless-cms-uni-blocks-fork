import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/JSXBlock';
import { InnerTable } from '../../ui-kit/InnerTable/InnerTable';
import type { TariffsTableInnerContent } from '../../ui-kit/InnerTable/InnerTableProps';

export interface TariffsTableRowContainerProps extends UniBlockProps {
  tableInner?: TariffsTableInnerContent;
  onHideContentClick?: () => void;
}

export const TariffsTableRowContainer = JSX<TariffsTableRowContainerProps>(
  ({ children, tableInner, onHideContentClick }) => (
    <div className="self-start flex flex-col" role="row">
      <div className="flex">{children}</div>
      {tableInner ? (
        <div className="origin-top animate-expansion">
          <InnerTable {...tableInner} onClick={onHideContentClick} />
        </div>
      ) : null}
    </div>
  ),
);
