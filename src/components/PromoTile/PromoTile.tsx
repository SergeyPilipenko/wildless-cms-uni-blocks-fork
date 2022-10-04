import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { UniBlockProps } from '../../types';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { BaseTile } from '../BaseTile/BaseTile';
import { getTileHeadingType } from '../BaseTile/getTileHeadingType';
import { getTileMinHeight } from '../BaseTile/getTileMinHeight';
import { getTileRightPadding } from '../BaseTile/getTileRightPadding';
import type { PromoTileContent } from './PromoTileContent';
import { Headline } from '../Headline/Headline';

export interface PromoTileProps extends PromoTileContent, UniBlockProps {}

const promoTileStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export const PromoTile = JSX<PromoTileProps>(
  ({
    className = '',
    context,
    title = 'Акции и спецпредложения',
    date,
    description,
    buttons = [],
    version = 'primary',
    ...rest
  }) => {
    return (
      <BlockWrapper
        context={context}
        className={`bg-white text-primary-text font-sans p-9 box-border ${className} ${
          promoTileStyleMap[version]
        } ${getTileRightPadding(className)} ${getTileMinHeight(className)} `}
        {...rest}
      >
        <BaseTile
          context={context}
          title={
            title ? (
              <div>
                <Headline
                  context={context}
                  title={title}
                  className={`!p-0 max-w-[600px]`}
                  headlineVersion={getTileHeadingType(className)}
                  bgColorHeadline={version}
                />
              </div>
            ) : null
          }
          buttons={
            buttons?.length ? (
              <ButtonSection context={context} buttons={buttons} className="flex mt-9 gap-3" />
            ) : null
          }
        >
          <div className="mt-1.5">
            {date ? <div className="text-sm mb-2">{formatDate(date)}</div> : null}
            <div className="text-base">{description}</div>
          </div>
        </BaseTile>
      </BlockWrapper>
    );
  },
);

function formatDate(date: string) {
  const dateObj = new Date(date);
  const dateFormat: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return dateObj.toLocaleString('ru-RU', dateFormat).replace('г.', '');
}
