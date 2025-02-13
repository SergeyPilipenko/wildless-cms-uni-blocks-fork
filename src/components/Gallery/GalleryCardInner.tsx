import { JSX } from '@redneckz/uni-jsx';
import { AlignText } from '../../model/AlignText';
import type { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import { renderButton } from '../../ui-kit/Button/ButtonSection';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { HEADLINE_SMALL_VERSION } from '../Headline/constants';
import type { GalleryCardProps, GalleryItemProps } from './GalleryContent';
import { getIconWithVersion } from '../../utils/getIconWithVersion';

export const GalleryCardInner = JSX<GalleryCardProps>(
  ({
    title,
    headlineSmallVersion = 'H6',
    description,
    additionalDescription,
    icon,
    items,
    button,
    version,
    isDotted = true,
    align = 'center',
  }) => {
    return (
      <div className={`h-full flex flex-col justify-between ${AlignText[align]}`}>
        <div className="flex flex-col h-full">
          {renderImage(icon, version)}
          {renderCardTitle(headlineSmallVersion, title)}
          {renderDescription(description, title)}
          {items?.length ? renderItems(items, isDotted, version) : null}
          {renderAdditionalDescription(additionalDescription)}
        </div>
        {button?.text ? renderButton({ button, buttonClassName: 'mt-6' }) : null}
      </div>
    );
  },
);

const renderImage = (image?: Picture, version?: BlockVersion) => (
  <div className="flex justify-center">
    {image?.src ? <Img className="mb-5" image={image} /> : null}
    {image?.icon ? (
      <Img
        className={`w-[32px] h-[32px] min-w-[32px] mb-5 rounded-full`}
        image={getIconWithVersion(image, version)}
        asSVG
      />
    ) : null}
  </div>
);

const renderCardTitle = (headlineSmallVersion: string, title?: string) =>
  title ? <div className={HEADLINE_SMALL_VERSION[headlineSmallVersion]}>{title}</div> : null;

const renderDescription = (description?: string, title?: string) =>
  description ? <div className={`text-l ${title ? 'mt-2' : ''}`}>{description}</div> : null;

const renderAdditionalDescription = (additionalDescription?: string) =>
  additionalDescription ? (
    <div className="text-m-light text-secondary-text mt-auto">{additionalDescription}</div>
  ) : null;

const renderItems = (
  items: GalleryItemProps[],
  isDotted: boolean,
  version: BlockVersion = 'primary',
) => (
  <List
    className={`max-w-[308px] mt-2 text-s ${version === 'primary' ? '!text-secondary-text' : ''}`}
    itemClassName="text-left"
    items={items.filter((item) => item?.text).map((item) => item.text as string)}
    isDotted={isDotted}
    version={version}
  />
);
