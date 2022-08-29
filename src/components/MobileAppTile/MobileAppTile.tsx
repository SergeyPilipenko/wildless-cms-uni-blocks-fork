import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Heading } from '../../ui-kit/Heading/Heading';
import { BaseTile } from '../BaseTile/BaseTile';
import { getTileHeadingType } from '../BaseTile/getTileHeadingType';
import { getTileMinHeight } from '../BaseTile/getTileMinHeight';
import { getTileRightPadding } from '../BaseTile/getTileRightPadding';
import type { MobileAppTileContent } from './MobileAppTileContent';

export interface MobileAppTileProps extends MobileAppTileContent, UniBlockProps {}

export const MobileAppTile = JSX<MobileAppTileProps>(
  ({
    className = '',
    context,
    title = 'Мобильное приложение',
    qr,
    buttons = [],
    anchor = null,
  }) => {
    return (
      <section
        className={`bg-white text-primary-text font-sans p-9 box-border ${className}  ${getTileRightPadding(
          className,
        )} ${getTileMinHeight(className)} `}
        id={anchor}
      >
        <BaseTile
          context={context}
          title={
            title && (
              <Heading
                headingType={getTileHeadingType(className)}
                title={title}
                className={`whitespace-pre-wrap max-w-[600px]`}
              />
            )
          }
          buttons={
            buttons?.length ? (
              <ButtonSection context={context} buttons={buttons} className="flex mt-9 gap-3" />
            ) : null
          }
        >
          <div className="flex items-center">
            {qr?.src && qr?.href && (
              <a href={qr.href} target="_blank" aria-label={title}>
                <img
                  src={qr.src}
                  alt={title}
                  title={title}
                  width="164"
                  height="164"
                  className="w-[90px] h-[90px] min-w-[90px] min-h-[90px] bg-secondary-light"
                />
              </a>
            )}
            <span className="font-normal text-sm text-secondary-text ml-4">
              Наведите камеру телефона на QR-код и скачайте приложение
            </span>
          </div>
        </BaseTile>
      </section>
    );
  },
);
