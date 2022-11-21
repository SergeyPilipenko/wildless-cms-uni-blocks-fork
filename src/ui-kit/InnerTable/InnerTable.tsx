import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import { useTariffsInnerTableData } from '../../hooks/useTariffsInnerTableData';
import type { UniBlockProps } from '../../model/JSXBlock';
import { InnerTableBody } from './InnerTableBody';
import { TableInnerButton } from './InnerTableButton';
import { InnerTableHeader } from './InnerTableHeader';
import type { TableFetchData, TariffsTableInnerContent } from './InnerTableProps';

export interface InnerTableProps extends TariffsTableInnerContent, UniBlockProps {}

export const InnerTable = JSX<InnerTableProps>(({ context, dataUrl, pdfUrl }) => {
  const { tableData }: TableFetchData = useTariffsInnerTableData(dataUrl);

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const items = tableData?.[activeTabIndex]?.items ?? [];

  const currencies = tableData?.map((item) => item.currency ?? '');

  return tableData ? (
    <div className="bg-white z-10">
      <InnerTableHeader
        currencies={currencies}
        activeTabIndex={activeTabIndex}
        setActiveTabIndex={setActiveTabIndex}
        linkToPDF={pdfUrl} //TODO: need link to service
      />
      <InnerTableBody context={context} activeTabIndex={activeTabIndex} items={items} />
      <TableInnerButton context={context} isOpen />
    </div>
  ) : null;
});
