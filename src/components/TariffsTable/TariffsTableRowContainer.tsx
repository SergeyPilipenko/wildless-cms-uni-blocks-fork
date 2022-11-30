import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { VNode } from '../../model/VNode';
import { InnerTable } from '../../ui-kit/InnerTable/InnerTable';
import type { TariffsTableInnerContent } from '../../ui-kit/InnerTable/InnerTableProps';

export interface TariffsTableRowContainerProps extends UniBlockProps {
  children?: VNode;
  onHideContentClick: () => void;
  tableInner?: TariffsTableInnerContent;
}

export const TariffsTableRowContainer = JSX<TariffsTableRowContainerProps>(
  ({ context, children, tableInner, onHideContentClick }) => {
    return (
      <div className="self-start flex flex-col" role="row">
        <div className="flex">{children}</div>
        {tableInner ? (
          <div className="origin-top animate-expansion">
            <InnerTable context={context} {...tableInner} onClick={onHideContentClick} />
          </div>
        ) : null}
      </div>
    );
  },
);
