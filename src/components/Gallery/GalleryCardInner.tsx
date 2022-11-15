import { JSX } from '@redneckz/uni-jsx';
import type { AlignType } from '../../model/AlignType';
import type { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import { Button } from '../../ui-kit/Button/Button';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { HEADLINE_SMALL_VERSION } from '../Headline/constants';
import type { GalleryCardProps, GalleryItemProps } from './GalleryContent';

const ALIGN_TITLE: Record<AlignType, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const GalleryCardInner = JSX<GalleryCardProps>(
  ({
    title,
    headlineSmallVersion = 'XL_L',
    description,
    additionalDescription,
    image,
    items,
    button,
    version,
    isDotted = true,
    align = 'center',
  }) => {
    return (
      <div className={`h-full flex flex-col justify-between ${ALIGN_TITLE[align]}`}>
        <div className="flex flex-col h-full">
          {renderImage(image)}
          {renderCardTitle(headlineSmallVersion, title)}
          {renderDescription(description, title)}
          {renderAdditionalDescription(additionalDescription)}
          {items?.length ? renderItems(items, isDotted, version) : null}
        </div>
        {button ? renderButton(button) : null}
      </div>
    );
  },
);

const renderImage = (image?: Picture) =>
  image?.src ? (
    <div className="flex justify-center">
      <Img className="mb-6" image={image} />
    </div>
  ) : null;

const renderCardTitle = (headlineSmallVersion: string, title?: string) =>
  title ? <div className={HEADLINE_SMALL_VERSION[headlineSmallVersion]}>{title}</div> : null;

const renderDescription = (description?: string, title?: string) =>
  description ? <div className={`text-base ${title ? 'mt-2' : ''}`}>{description}</div> : null;

const renderAdditionalDescription = (additionalDescription?: string) =>
  additionalDescription ? (
    <div className="text-m-light text-secondary-text mt-auto">{additionalDescription}</div>
  ) : null;

const renderButton = (button: ButtonWithIconProps) => (
  <Button
    className="mt-6 w-full"
    appendLeft={button.icon && <Img image={button.icon} width="24px" height="24px" asSVG />}
    {...button}
  />
);

const renderItems = (
  items: GalleryItemProps[],
  isDotted: boolean,
  version: BlockVersion = 'primary',
) => (
  <List
    className={`max-w-[308px] mt-2 text-s ${version === 'primary' ? '!text-secondary-text' : ''}`}
    itemClassName="mt-1 text-left first:mt-0"
    items={items.filter((item) => item?.text).map((item) => item.text as string)}
    isDotted={isDotted}
    version={version}
  />
);
