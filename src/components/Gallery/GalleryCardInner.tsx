import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import { BlockItem } from '../../ui-kit/BlockItem/BlockItem';
import { Button } from '../../ui-kit/Button/Button';
import { Img } from '../../ui-kit/Img/Img';
import type { GalleryCard, GalleryItem } from './GalleryContent';

export const GalleryCardInner = JSX<GalleryCard>(
  ({ title, description, image, items, button, version }) => {
    return (
      <div>
        <div>
          {image?.src ? (
            <div className="flex justify-center">
              <Img className="mb-6" image={image} />
            </div>
          ) : null}
          {title && renderCardTitle(title, description, items)}
          {description ? <div className={`font-normal text-sm mt-2`}>{description}</div> : null}
          {items?.length ? (
            <section className={`max-w-[308px] mt-2`} role="list">
              {items.map((item, i) => renderItem(item.text, i, version))}
            </section>
          ) : null}
        </div>
        {button?.text && <Button className="mt-6" {...button} />}
      </div>
    );
  },
);

function renderCardTitle(title: string, description?: string, items?: GalleryItem[]) {
  return (
    <div
      className={`font-medium text-xl m-0 ${!description && !items?.length ? 'text-center' : ''}`}
    >
      {title}
    </div>
  );
}

function renderItem(item: string, i: number, version?: BlockVersion) {
  return (
    <BlockItem key={String(i)} version={version ?? 'primary'}>
      <span className="text-sm">{item}</span>
    </BlockItem>
  );
}
