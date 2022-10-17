import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useState } from '@redneckz/uni-jsx/lib/hooks';
import { EventBus } from '../../EventBus/EventBus';
import type { VNode } from '../../model/VNode';
import type { UniBlockProps } from '../../types';
import { InnerTable } from '../../ui-kit/InnerTable/InnerTable';

export interface TariffsTableRowContainerProps extends UniBlockProps {
  children?: VNode;
  rowIdx: number;
}

export const TariffsTableRowContainer = JSX<TariffsTableRowContainerProps>(
  ({ context, children, rowIdx }) => {
    const [dataUrl, setDataUrl] = useState<string | undefined>(undefined);

    useEffect(
      () =>
        EventBus.inst.subscribe('tariffInnerTable', (event) => {
          setDataUrl(rowIdx === event.rowIdx ? event.dataUrl : undefined);
        }),
      [rowIdx],
    );

    return (
      <div className="self-start flex flex-col" role="row">
        <div className="flex">{children}</div>
        {dataUrl ? (
          <div className="origin-top animate-expansion">
            <InnerTable context={context} dataUrl={dataUrl} />
          </div>
        ) : null}
      </div>
    );
  },
);
