import { JSX } from '@redneckz/uni-jsx';
import { Button } from '../../ui-kit/Button/Button';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import type { GalleryCard, GalleryItem } from './GalleryContent';
import type { BlockVersion } from '../../model/BlockVersion';

export const GalleryCardInner = JSX<GalleryCard>(
  ({ title, description, image, items, button, version }) => {
    const titleStyleClasses = getTitleStyle(version, description, items);
    return (
      <div>
        <div>
          {image?.src ? (
            <div className="flex justify-center">
              <Img className="mb-6" image={image} />
            </div>
          ) : null}
          {title ? renderCardTitle(title, titleStyleClasses) : null}
          {description ? (
            <div className={`font-normal text-sm ${title ? 'mt-2' : ''}`}>{description}</div>
          ) : null}
          {items?.length ? renderItems(items, version) : null}
        </div>
        {button?.text ? renderButton(button) : null}
      </div>
    );
  },
);

function renderButton(button) {
  return (
    <Button
      className="mt-6 w-full"
      appendLeft={button.icon && <Icon name={button.icon} width="24px" height="24px" asSVG />}
      {...button}
    />
  );
}

function renderCardTitle(title: string, className: string) {
  return <div className={`font-medium text-xl m-0 ${className}`}>{title}</div>;
}

function renderItems(items: GalleryItem[], version: BlockVersion = 'primary') {
  return (
    <List
      className={`max-w-[308px] mt-2 text-sm ${
        version === 'primary' ? '!text-secondary-text' : ''
      }`}
      itemClassName="mt-1 first:mt-0"
      items={items.filter((item) => item?.text).map((item) => item.text as string)}
      version={version}
    />
  );
}

function getTitleStyle(version, description, items) {
  return `font-medium text-xl m-0
        ${version !== 'secondary' ? 'text-primary-text' : ''}
        ${!description && !items?.length ? 'text-center' : ''}
      `;
}
