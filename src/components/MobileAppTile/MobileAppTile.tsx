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
    headingType = 'h4',
    ...rest
  }) => {
    const textColorClass = version === 'primary' ? 'text-primary-text' : '';
    const containerStyle = version === 'secondary' ? 'p-3.5 min-w-[120px]' : 'min-w-[92px]';

    return (
      <BlockWrapper
        context={context}
        className={`flex justify-between font-sans p-9 box-border relative min-h-[320px]
        ${getTileMinHeight(className)}
        ${mobileAppStyleMap[version]}
        ${className}`}
        {...rest}
      >
        <BaseTile
          context={context}
          className="z-[1]"
          title={
            title ? (
              <Heading
                headingType={headingType}
                as="h3"
                title={title}
                className={`whitespace-pre-wrap max-w-[509px] mb-6
                  ${textColorClass}`}
              />
            ) : null
          }
          buttons={
            buttons?.length ? (
              <ButtonSection context={context} buttons={buttons} className="flex mt-8 gap-4" />
            ) : null
          }
        >
          <div className="flex flex-1 items-center">
            {qr?.src && (
              <div className={`flex justify-center mr-5 bg-white rounded-md ${containerStyle}`}>
                <Img image={qr} />
              </div>
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
      itemClassName="text-l-light mb-2 last:mb-0"
      version={version === 'primary' ? 'tile' : 'tile-white'}
    />
  ) : (
    <span className="text-m-light text-secondary-text">
      Наведите камеру телефона на QR-код и скачайте приложение
    </span>
  );
};
