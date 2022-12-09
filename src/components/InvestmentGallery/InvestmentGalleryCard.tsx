import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import { BorderVersionStyleMap } from '../../model/BorderVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import { Description } from '../../ui-kit/Description/Description';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { BaseTile } from '../BaseTile/BaseTile';
import type {
  CardColumnsMode,
  CardListItem,
  InvestmentGalleryCardTypes,
} from './InvestmentGalleryContent';

export interface RecommendationCardProps extends InvestmentGalleryCardTypes, UniBlockProps {
  version?: BlockVersion;
}
const getItemListFontSize = (colValue?: string) => (colValue === 'single' ? 'text-h6' : 'text-l');

const cardColumnsModeStyleMap: Record<CardColumnsMode, string> = {
  double: 'flex gap-y-2 gap-x-10 flex-wrap',
  single: 'flex gap-y-2 flex-col',
};

export const InvestmentGalleryCard = JSX<RecommendationCardProps>(
  ({
    className = '',
    columnsMode = 'double',
    context,
    description,
    additionalDescription,
    image,
    cardList,
    title,
    version = 'primary',
  }) => {
    const tileTitle = title ? (
      <Heading headingType="h4" as="h3" className="mb-3.5 z-10" title={title} />
    ) : null;
    const tileImage = image?.src ? (
      <Img className="absolute bottom-0 right-0 m-0" image={image} />
    ) : null;

    return (
      <section
        className={`relative overflow-hidden text-left border border-solid box-border
          p-9 min-w-[697px] min-h-[319px]
          ${BorderVersionStyleMap[version]}
          ${className}`}
        role="listitem"
      >
        <BaseTile
          context={context}
          className="flex justify-between"
          title={tileTitle}
          image={tileImage}
        >
          <div className="flex flex-col justify-between">
            <div className="flex itens-center justify-between mb-4">
              {description ? <Description className="text-h6" description={description} /> : null}
              {additionalDescription ? (
                <div className="text-m-light text-secondary-text"> {additionalDescription} </div>
              ) : null}
            </div>
            {cardList?.length ? (
              <div className={`${cardColumnsModeStyleMap[columnsMode]}`} role="list">
                {renderCardList(cardList, columnsMode)}
              </div>
            ) : null}
          </div>
        </BaseTile>
      </section>
    );
  },
);

const renderCardList = (cardList: CardListItem[], columnsMode: string) =>
  cardList.map((item, i) => (
    <div
      key={String(i)}
      className={columnsMode === 'double' ? 'basis-[calc(50%-20px)]' : ''}
      role="listitem"
    >
      {item?.parameter ? (
        <span className={`pr-2.5 ${getItemListFontSize(columnsMode)}`}>{item.parameter}</span>
      ) : null}
      {item?.parameterDesccription ? (
        <span className="text-m-light text-secondary-text">{item.parameterDesccription}</span>
      ) : null}
    </div>
  ));
