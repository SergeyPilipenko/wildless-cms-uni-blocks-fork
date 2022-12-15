import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import { useTariffsInnerTableData } from './useTariffsInnerTableData';
import { InnerTableBody } from './InnerTableBody';
import { TableInnerButton } from './InnerTableButton';
import { InnerTableHeader } from './InnerTableHeader';
import type { TableFetchData, TariffsTableInnerContent } from './InnerTableProps';

export interface InnerTableProps extends TariffsTableInnerContent {
  onClick?: () => void;
}

const EMPTY_DATA = 'Данных нет';

export const InnerTable = JSX<InnerTableProps>(({ dataUrl, pdfUrl, onClick }) => {
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
      <InnerTableBody activeTabIndex={activeTabIndex} items={items} />
      <TableInnerButton onClick={onClick} isOpen />
    </div>
  ) : (
    <div className="my-5 text-h6 text-center">
      <p>{EMPTY_DATA}</p>
      <TableInnerButton onClick={onClick} isOpen />
    </div>
  );
});
