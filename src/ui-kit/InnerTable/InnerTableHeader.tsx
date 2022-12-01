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
        <div className="flex bg-secondary-light p-1.5 rounded-md">
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
          target="_blank"
          appendLeft={
            <Img image="DocDownloadIcon" className="mr-0.5" width="20" height="20" asSVG />
          }
          text="Скачать в PDF"
        />
      ) : null}
    </div>
  ),
);
