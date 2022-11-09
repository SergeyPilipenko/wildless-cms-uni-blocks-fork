import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../model/ContentPageDef';
import type { Picture } from '../../model/Picture';
import type { ProductColorVersion } from '../../model/ProductColorVersion';
import { Button } from '../../ui-kit/Button/Button';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import type { CatalogCardType } from './CatalogContent';

export interface CatalogCardProps extends CatalogCardType, UniBlockProps {
  version?: BlockVersion;
}

const iconVersionMap = {
  default: 'normal',
  primary: 'white',
  secondary: 'black',
};

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
        {button ? renderButton(button) : null}
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

const renderButton = (button: ButtonWithIconProps) => {
  const { icon, iconRight, ...other } = button;

  if (!button?.text) {
    return null;
  }

  const iconVersion = iconVersionMap[button?.version || 'default'];
  const leftIcon = renderButtonIcon({ ...icon, iconVersion });
  const rightIcon = renderButtonIcon({ ...iconRight, iconVersion });

  return (
    <Button className="mt-5 w-full" appendLeft={leftIcon} appendRight={rightIcon} {...other} />
  );
};

const renderButtonIcon = (buttonIcon?: Picture) => {
  if (!buttonIcon || (!buttonIcon?.icon && !buttonIcon?.src)) {
    return null;
  }

  const iconWidth = buttonIcon?.size?.width ? `${buttonIcon.size.width}` : '24';

  return <Img image={buttonIcon} width={iconWidth} height="24" asSVG />;
};
