import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import { type UniBlockProps } from '../../model/ContentPageDef';
import { Img } from '../Img/Img';
import { InnerTableBodyItem } from './InnerTableBodyItem';
import type { DataItem } from './InnerTableProps';

export interface InnerTableBodyProps extends UniBlockProps {
  activeTabIndex: number;
  items: DataItem[];
}

export const InnerTableBody = JSX<InnerTableBodyProps>(({ context, activeTabIndex, items }) => {
  const [hiddenTables, setHiddenTables] = useState<Record<string, boolean>>({});

  const toggleTable = (key: string) => {
    setHiddenTables((oldState) => ({ ...oldState, [key]: !oldState[key] }));
  };

  return (
    <div>
      {items.map((_, tableIdx) => {
        const key = `activeTabIdx:${activeTabIndex}-tableIdx:${tableIdx}`;

        return (
          <div key={key} className="w-full">
            <div
              className="flex p-4 bg-main-stroke text-xl-light text-center justify-center cursor-pointer relative"
              onClick={() => toggleTable(key)}
            >
              {_.title}
              <Img
                image={hiddenTables[key] ? 'PlusIcon' : 'MinusIcon'}
                className="absolute right-[22px]"
                width="24"
                height="24"
              />
            </div>
            <div
              className={`w-full pl-2 overflow-hidden transition-height duration-500 ease-in-out ${
                hiddenTables[key] ? 'h-0' : ''
              }`}
            >
              <div className="relative">
                <InnerTableBodyItem context={context} rows={_.rowsData} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});
