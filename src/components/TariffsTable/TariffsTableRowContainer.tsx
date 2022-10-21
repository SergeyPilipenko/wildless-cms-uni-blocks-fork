import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useState } from '@redneckz/uni-jsx/lib/hooks';
import { EventBus } from '../../EventBus/EventBus';
import type { VNode } from '../../model/VNode';
import type { UniBlockProps } from '../../types';
import { InnerTable } from '../../ui-kit/InnerTable/InnerTable';
import type { TariffsTableInnerContent } from '../../ui-kit/InnerTable/InnerTableProps';

export interface TariffsTableRowContainerProps extends UniBlockProps {
  children?: VNode;
  rowIdx: number;
}

export const TariffsTableRowContainer = JSX<TariffsTableRowContainerProps>(
  ({ context, children, rowIdx }) => {
    const [tableInnerData, setTableInnerData] = useState<TariffsTableInnerContent | undefined>(
      undefined,
    );

    useEffect(
      () =>
        EventBus.inst.subscribe('tariffInnerTable', (event) => {
          setTableInnerData(
            rowIdx === event.rowIdx ? { dataUrl: event.dataUrl, pdfUrl: event.pdfUrl } : undefined,
          );
        }),
      [rowIdx],
    );

    return (
      <div className="self-start flex flex-col" role="row">
        <div className="flex">{children}</div>
        {tableInnerData ? (
          <div className="origin-top animate-expansion">
            <InnerTable context={context} {...tableInnerData} />
          </div>
        ) : null}
      </div>
    );
  },
);
