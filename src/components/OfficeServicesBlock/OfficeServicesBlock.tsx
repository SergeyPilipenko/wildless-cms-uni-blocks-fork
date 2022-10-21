import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type {
  OfficeServicesBlockContent,
  OfficeServicesBlockList,
} from './OfficeServicesBlockContent';

export interface OfficeServicesBlockProps extends OfficeServicesBlockContent, UniBlockProps {}

export const OfficeServicesBlock = JSX<OfficeServicesBlockProps>(
  ({ className = '', context, title, officesList, anchor = '' }) => {
    return (
      <BlockWrapper
        context={context}
        id={anchor}
        className={`font-sans bg-white p-12 flex flex-col ${className}`}
      >
        {title ? <Heading headingType="h5" className="mb-2.5" title={title} /> : null}
        {officesList?.length ? officesList.map(renderListItems) : null}
      </BlockWrapper>
    );
  },
);

const renderListItems = (itemList: OfficeServicesBlockList, i) => (
  <li key={`list_item_${String(i)}`} className="flex mb-2.5 list-none">
    {itemList.icon ? (
      <Img
        className="mr-[14px] max-w-6 max-h-6"
        width="24px"
        height="24px"
        asSVG
        image={itemList.icon}
      />
    ) : null}
    {itemList.text ? <span className="text-l-light">{itemList.text}</span> : null}
  </li>
);
