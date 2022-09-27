import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { Button } from '../../ui-kit/Button/Button';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type { CatalogCardType, CatalogProductColor } from './CatalogContent';

export interface CatalogCardProps extends CatalogCardType, UniBlockProps {
  version?: BlockVersion;
}

const cardStyleMap: Record<CatalogProductColor, string> = {
  black: 'bg-black',
  white: 'bg-white',
};

export const CatalogCard = JSX<CatalogCardProps>(
  ({ className = '', title, description, image, price, button, colors }) => {
    return (
      <section
        className={`border border-solid box-border p-[30px] min-w-[402px] flex flex-col justify-left ${className}`}
        role="listitem"
      >
        {image?.src ? <Img className="mb-5" image={image} /> : null}
        {title ? (
          <Heading headingType="h6" as="h5" className="text-left mb-1.5" title={title} />
        ) : null}
        {description ? <div className="text-m-md text-left mb-4">{description}</div> : null}
        {colors?.length ? (
          <div className="flex mb-4 text-m-md text-secondary-text">
            Доступные цвета: {colors.map(renderColorOption)}
          </div>
        ) : null}
        {price ? <div className="text-title-sm text-left">{price}&nbsp;₽</div> : null}
        {button?.text ? <Button className="mt-6 w-full" {...button} /> : null}
      </section>
    );
  },
);

const renderColorOption = (color: CatalogProductColor, i: number) => (
  <span
    key={String(i)}
    className={`w-6 h-6 ml-3 border border-solid border-main-divider rounded-full ${cardStyleMap[color]}`}
  />
);
