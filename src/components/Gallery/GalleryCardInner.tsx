import { JSX } from '@redneckz/uni-jsx';
import { Button } from '../../ui-kit/Button/Button';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import type { BlockVersion } from '../../model/BlockVersion';
import type { GalleryCardProps, GalleryItemProps } from './GalleryContent';

export const GalleryCardInner = JSX<GalleryCardProps>(
  ({ title, description, image, items, button, version, isDotted = true }) => {
    const titleStyleClasses = getTitleStyle(version);

    return (
      <div className="h-full flex flex-col justify-between text-center">
        <div>
          {image?.src ? (
            <div className="flex justify-center">
              <Img className="mb-6" image={image} />
            </div>
          ) : null}
          {title ? renderCardTitle(title, titleStyleClasses) : null}
          {description ? <div className={`text-m${title ? 'mt-2' : ''}`}>{description}</div> : null}
          {items?.length ? renderItems(items, isDotted, version) : null}
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
      appendLeft={button.icon && <Img image={button.icon} width="24px" height="24px" asSVG />}
      {...button}
    />
  );
}

function renderCardTitle(title: string, className: string) {
  return <div className={`text-xl-light m-0 ${className}`}>{title}</div>;
}

function renderItems(
  items: GalleryItemProps[],
  isDotted: boolean,
  version: BlockVersion = 'primary',
) {
  return (
    <List
      className={`max-w-[308px] mt-2 text-s ${version === 'primary' ? '!text-secondary-text' : ''}`}
      itemClassName="mt-1 text-left first:mt-0"
      items={items.filter((item) => item?.text).map((item) => item.text as string)}
      isDotted={isDotted}
      version={version}
    />
  );
}

function getTitleStyle(version) {
  return `text-xl-light m-0
        ${version !== 'secondary' ? 'text-primary-text' : ''}
      `;
}
