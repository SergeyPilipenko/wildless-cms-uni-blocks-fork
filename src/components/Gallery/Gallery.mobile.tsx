import { JSX } from '@redneckz/uni-jsx';
import { BlockItem } from '../../ui-kit/BlockItem/BlockItem';
import { Button } from '../../ui-kit/Button/Button';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img';
import type { GalleryCard } from './GalleryContent';
import type { GalleryProps } from './GalleryProps';

export const Gallery = JSX<GalleryProps>(({ title, description, cards = [], className }) => {
  return (
    <section
      className={`relative font-sans text-primary-text bg-white p-4 overflow-hidden ${className}`}
    >
      <div className="flex flex-col items-center mb-8">
        <Heading type="h2" className="text-center" text={title} />
        {description ? (
          <div className="font-normal text-base max-w-[600px] mt-3">{description}</div>
        ) : null}
      </div>
      <div className="horizontal-list no-scrollbar" role="list">
        {cards?.map(renderCard)}
      </div>
    </section>
  );
});

function renderCard(card: GalleryCard, key: number) {
  return (
    <div
      className="box-border horizontal-list-item border-solid border rounded-md border-main-divider p-4 mx-1 flex flex-col justify-between items-stretch"
      role="listitem"
      key={key}
    >
      <div>
        {card.image?.src ? (
          <div className="flex justify-center">
            <Img className="mb-6" image={card.image} />
          </div>
        ) : null}
        {card.title ? (
          <h4
            className={`font-medium text-xl m-0 ${
              !card.description && !card.items?.length ? 'text-center' : ''
            }`}
          >
            {card.title}
          </h4>
        ) : null}
        {card.description ? (
          <div className="font-normal text-sm text-secondary-text mt-2">{card.description}</div>
        ) : null}
        {card.items?.length ? renderItems(card.items) : null}
      </div>
      {card?.button?.href ? <Button className="mt-6" {...card.button} /> : null}
    </div>
  );
}

function renderItems(items: string[] = []) {
  return (
    <section className="max-w-[308px] mt-2" role="list">
      {items.map((item, i) => (
        <BlockItem key={String(i)}>
          <span className="text-sm text-secondary-text">{item}</span>
        </BlockItem>
      ))}
    </section>
  );
}
