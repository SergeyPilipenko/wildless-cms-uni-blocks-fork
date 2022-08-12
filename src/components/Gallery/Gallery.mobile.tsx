import { JSX } from '@redneckz/uni-jsx';
import { BlockVersion } from '../../model/BlockVersion';
import { Button } from '../../ui-kit/Button/Button';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { SwipeListControl } from '../../ui-kit/SwipeListControl/SwipeListControl';
import type { GalleryCard } from './GalleryContent';
import { GalleryItem } from './GalleryContent';
import type { GalleryProps } from './GalleryProps';
import { Icon } from '../../ui-kit/Icon/Icon';

const blockStyle: Record<BlockVersion, string> = {
  primary: 'bg-white',
  secondary: 'bg-primary-main text-white',
};

export const Gallery = JSX<GalleryProps>(
  ({ context, title, description, cards = [], className, isScroll = true }) => {
    return (
      <section
        className={`relative font-sans text-primary-text bg-white px-4 py-6 overflow-hidden ${className}`}
      >
        <div className="flex flex-col items-center mb-5">
          <Heading headingType="h2" className="text-center" title={title} />
          {description ? (
            <div className="font-normal text-m-md max-w-[600px] mt-2">{description}</div>
          ) : null}
        </div>
        {renderCardsLayout(isScroll, cards, context)}
      </section>
    );
  },
);

function renderCardsLayout(isScroll: boolean, cards: GalleryCard[], context) {
  return isScroll ? (
    <SwipeListControl context={context}>{cards?.map(renderCard)}</SwipeListControl>
  ) : (
    <div className="grid gap-[14px]">{cards?.map(renderCard)}</div>
  );
}

function renderCard(card: GalleryCard, key: number) {
  return (
    <div
      className={`box-border horizontal-list-item border-solid border rounded-md border-main-stroke p-4 flex flex-col
      ${blockStyle[card.version ?? 'primary']}`}
      role="listitem"
      key={key}
    >
      <div>
        {card.image?.src ? (
          <div className="flex justify-center">
            <Img className="mb-6" image={card.image} />
          </div>
        ) : null}
        {card.title ? <h4 className={`font-medium text-m-title-xs m-0`}>{card.title}</h4> : null}
        {card.description ? renderDescription(card) : null}
        {card.items?.length ? renderItems(card.items) : null}
      </div>
      {card?.button?.href ? renderButton(card.button) : null}
    </div>
  );
}

function renderButton(button) {
  return (
    <Button
      className="mt-3"
      appendLeft={button?.icon && <Icon name={button?.icon} width="24px" height="24px" asSVG />}
      {...button}
    />
  );
}

function renderDescription(card: GalleryCard) {
  return (
    <div
      className={`text-secondary-text mt-2 ${
        card.version === 'secondary' ? 'text-white opacity-80' : ''
      }`}
    >
      {card.description}
    </div>
  );
}

function renderItems(items: GalleryItem[]) {
  return (
    <section className="mt-3">
      {items.map((item, i) => (
        <div key={String(i)}>
          <span className="text-m-md font-medium">{item.title}</span>
          <span className="text-m-sm text-secondary-text pl-2">{item.text}</span>
        </div>
      ))}
    </section>
  );
}
