import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { ProductColorVersion } from '../../model/ProductColorVersion';
import { renderButton } from '../../ui-kit/Button/ButtonSection';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type { CatalogCardType } from './CatalogContent';

export interface CatalogCardProps extends CatalogCardType, UniBlockProps {
  version?: BlockVersion;
}

const cardStyleMap: Record<ProductColorVersion, string> = {
  black: 'bg-black',
  white: 'bg-white',
};

export const CatalogCard = JSX<CatalogCardProps>(
  ({ className = '', title, description, image, price, button, colors }) => {
    return (
      <section
        className={`border border-solid box-border border-main-stroke p-[30px] min-w-[402px] flex flex-col justify-left ${className}`}
        role="listitem"
      >
        {image?.src ? <Img className="mb-5 flex justify-center" image={image} /> : null}
        {title ? (
          <Heading headingType="h6" as="h4" className="text-left mb-1.5" title={title} />
        ) : null}
        {description ? <div className="text-m-light text-left mb-4">{description}</div> : null}
        {colors?.length ? (
          <div className="flex mb-4 text-m-light text-secondary-text">
            <div className="mr-1.5">Доступные цвета: </div>
            {colors.map(renderColorOption)}
          </div>
        ) : null}
        {price ? <div className="text-h3 text-left">{price}&nbsp;₽</div> : null}
        {button ? renderButton({ button, buttonClassName: 'mt-5 w-full' }) : null}
      </section>
    );
  },
);

const renderColorOption = (color: ProductColorVersion, i: number) => (
  <span
    key={String(i)}
    className={`w-6 h-6 ml-3 border border-solid border-main-divider rounded-full ${cardStyleMap[color]}`}
  />
);
