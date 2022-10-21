import { JSX } from '@redneckz/uni-jsx';
import { Button } from '../Button/Button';
import { Img } from '../Img/Img';

export interface InnerTableHeaderProps {
  currencies?: string[];
  linkToPDF?: string;
  activeTabIndex: number;
  setActiveTabIndex: (idx: number) => void;
}

export const InnerTableHeader = JSX<InnerTableHeaderProps>(
  ({ currencies, linkToPDF, activeTabIndex, setActiveTabIndex }) => (
    <div className="flex justify-between w-full pt-2.5 pb-3">
      {currencies && currencies.length > 1 ? (
        <div className="flex bg-secondary-light p-1 rounded-md">
          {currencies.map((currency, idx) => (
            <div
              key={currency}
              className={`rounded-md text-xl-light px-4 py-3 cursor-pointer ${
                idx === activeTabIndex ? 'bg-primary-main text-white' : 'text-secondary-text'
              }`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {currency || idx + 1}
            </div>
          ))}
        </div>
      ) : null}
      {linkToPDF ? (
        <Button
          href={linkToPDF}
          version="secondary"
          className="flex justify-center items-center text-l-light text-primary-main px-8"
        >
          <Img image="DocDownloadIcon" className="mr-[10px]" width="24" height="24" asSVG />
          <span>Скачать в PDF</span>
        </Button>
      ) : null}
    </div>
  ),
);
