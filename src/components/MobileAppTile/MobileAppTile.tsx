import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { BaseTile } from '../BaseTile/BaseTile';
import { getTileMinHeight } from '../BaseTile/getTileMinHeight';
import { getTileRightPadding } from '../BaseTile/getTileRightPadding';
import type { MobileAppTileContent } from './MobileAppTileContent';

export interface MobileAppTileProps extends MobileAppTileContent, UniBlockProps {}

const mobileAppStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export const MobileAppTile = JSX<MobileAppTileProps>(
  ({
    className = '',
    context,
    title = 'Мобильное приложение',
    qr,
    buttons,
    version = 'primary',
    items,
    image,
    ...rest
  }) => {
    const textColorClass = version === 'primary' ? 'text-primary-text' : '';

    return (
      <BlockWrapper
        context={context}
        className={`flex justify-between font-sans p-9 box-border relative
        ${getTileRightPadding(className)} ${getTileMinHeight(className)}
        ${mobileAppStyleMap[version]}
        ${className}`}
        {...rest}
      >
        <BaseTile
          context={context}
          title={
            title ? (
              <Heading
                headingType="h3"
                title={title}
                className={`whitespace-pre-wrap max-w-[509px] mb-6
                  ${textColorClass}`}
              />
            ) : null
          }
          buttons={
            buttons?.length ? (
              <ButtonSection context={context} buttons={buttons} className="flex mt-[30px] gap-4" />
            ) : null
          }
        >
          <div className="flex flex-1 items-center">
            {qr?.src && qr?.href && (
              <a href={qr.href} target="_blank" aria-label={title}>
                <img
                  src={qr.src}
                  alt={title}
                  title={title}
                  width="122"
                  height="122"
                  className="w-[122px] h-[122px] min-w-[122px] min-h-[122px] bg-secondary-light mr-[23px] rounded-md"
                />
              </a>
            )}
            {renderList(version, items)}
          </div>
        </BaseTile>
        {image?.src ? (
          <div className="absolute right-0 bottom-0">
            <Img image={image} />
          </div>
        ) : null}
      </BlockWrapper>
    );
  },
);

const renderList = (version: string, items?: string[]) => {
  return items?.length ? (
    <List
      items={items}
      itemClassName="base font-light mb-2 last:mb-0"
      version={version === 'primary' ? 'tile' : 'tile-white'}
    />
  ) : (
    <span className="font-light text-secondary-text ml-4">
      Наведите камеру телефона на QR-код и скачайте приложение
    </span>
  );
};
