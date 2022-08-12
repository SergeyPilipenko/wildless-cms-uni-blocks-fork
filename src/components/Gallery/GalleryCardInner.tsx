import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import { BlockItem } from '../../ui-kit/BlockItem/BlockItem';
import { Button } from '../../ui-kit/Button/Button';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Img } from '../../ui-kit/Img/Img';
import type { GalleryCard } from './GalleryContent';

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

function renderItems(items, version) {
  return (
    <section className={`max-w-[308px] mt-2`} role="list">
      {items
        .filter((item) => item?.text)
        .map((item, i) => renderItem(item.text as string, i, version))}
    </section>
  );
}

function renderItem(item: string, i: number, version?: BlockVersion) {
  return (
    <BlockItem key={String(i)} version={version ?? 'primary'}>
      <span className="text-sm">{item}</span>
    </BlockItem>
  );
}

function getTitleStyle(version, description, items) {
  return `font-medium text-xl m-0
        ${version !== 'secondary' ? 'text-primary-text' : ''}
        ${!description && !items?.length ? 'text-center' : ''}
      `;
}
