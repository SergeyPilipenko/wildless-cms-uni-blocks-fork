import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import { VersionStyleMap } from '../../model/BlockVersion';
import type { ListOrientation } from '../../model/ListOrientation';
import { Button } from '../../ui-kit/Button/Button';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { ListItemVersion } from '../../ui-kit/List/ListProps';
import { SwipeListControl } from '../../ui-kit/SwipeListControl/SwipeListControl';
import type { ContentPageContext } from '../ContentPage/ContentPageContext';
import type { GalleryCardProps, GalleryItemProps } from './GalleryContent';
import type { GalleryProps } from './GalleryProps';
import { Picture } from '../../model/Picture';

export const Gallery = JSX<GalleryProps>(
  ({ context, title, description, cards = [], className, orientation = 'horizontal' }) => {
    const headingClassName = description ? 'mb-2' : 'mb-5';

    return (
      <section
        className={`relative font-sans text-primary-text bg-white px-4 py-6 overflow-hidden ${className}`}
      >
        <div className="flex flex-col items-center mb-5">
          {title ? (
            <Heading headingType="h3" className={`text-center ${headingClassName}`} title={title} />
          ) : null}
          {description ? (
            <div className="text-m max-w-[600px] text-center mb-5">{description}</div>
          ) : null}
        </div>
        {renderCardsLayout(orientation, cards, context)}
      </section>
    );
  },
);

function renderCardsLayout(
  orientation: ListOrientation,
  cards: GalleryCardProps[],
  context: ContentPageContext,
) {
  return orientation === 'horizontal' ? (
    <SwipeListControl context={context}>{cards?.map(renderCard)}</SwipeListControl>
  ) : (
    <div className="grid gap-[14px]">{cards?.map(renderCard)}</div>
  );
}

function renderCard(card: GalleryCardProps, key: number) {
  return (
    <div
      className={`h-full justify-between box-border horizontal-list-item border-solid border rounded-md border-main-stroke p-4 flex flex-col
      ${VersionStyleMap[card.version ?? 'primary']}`}
      key={key}
    >
      <div>
        {renderImage(card.icon)}
        {card.title ? <h3 className={`text-m-title-xs font-medium m-0`}>{card.title}</h3> : null}
        {card.description ? renderDescription(card) : null}
        {card.items?.length ? renderItems(card.items, card.isDotted, card.version) : null}
      </div>
      {card?.button?.text ? renderButton(card.button) : null}
    </div>
  );
}

const renderImage = (image?: Picture) =>
  image?.src || image?.icon ? (
    <div className="flex justify-center">
      <Img className="mb-3.5" image={image} />
    </div>
  ) : null;

function renderButton(button?: ButtonWithIconProps) {
  return <Button className="mt-3" {...button} />;
}

function renderDescription(card: GalleryCardProps) {
  return (
    <div
      className={`text-secondary-text mt-1 text-s ${
        card.version === 'secondary' ? 'text-white opacity-80' : ''
      }`}
    >
      {card.description}
    </div>
  );
}

const LIST_DOT_STYLE_MAP: Record<ListItemVersion, string> = {
  primary: 'bg-primary-text',
  secondary: 'bg-white',
  gray: 'bg-secondary-text',
};

function renderItems(
  items: GalleryItemProps[],
  isDotted?: boolean,
  version: BlockVersion = 'primary',
) {
  return (
    <section className="mt-3">
      {items.map((item, i) => (
        <div key={String(i)}>
          {isDotted ? (
            <div
              className={`rounded-full inline-block mr-3 mt-2 w-2 h-2 min-w-2 min-h-2 ${LIST_DOT_STYLE_MAP[version]}`}
            />
          ) : null}
          <span className="text-m font-medium">{item.title}</span>
          <span className={`text-s pl-2 ${version === 'primary' ? 'text-secondary-text' : ''}`}>
            {item.text}
          </span>
        </div>
      ))}
    </section>
  );
}
