import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Description } from '../../ui-kit/Description/Description';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { getTileMinHeight } from '../BaseTile/getTileMinHeight';
import { getTileRightPadding } from '../BaseTile/getTileRightPadding';
import type { ProductTileContent, TextBenefit } from './ProductTileContent';

export interface ProductTileProps extends ProductTileContent, UniBlockProps {}

const productTileStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export const ProductTile = JSX<ProductTileProps>(
  ({
    context,
    className = '',
    title,
    headingType = 'h3',
    description,
    additionalDescription,
    benefits,
    buttons,
    image,
    version = 'primary',
    anchor = null,
  }) => {
    return (
      <section
        className={`bg-white overflow-hidden text-primary-text font-sans p-9 box-border min-h-[364px] relative justify-between grid ${className} ${
          productTileStyleMap[version]
        } ${getTileRightPadding(className)} ${getTileMinHeight(className)} `}
        id={anchor}
      >
        <div className="z-[1]">
          {title ? (
            <Heading
              headingType={headingType}
              as="h3"
              title={title}
              className={`whitespace-pre-wrap text-h4`}
            />
          ) : null}
          {description ? (
            <Description className="mt-2 text-md font-light" description={description} />
          ) : null}
          {renderBenefits(benefits || [], version)}
          {additionalDescription
            ? renderAdditionalDescription(additionalDescription, version)
            : null}
        </div>
        {buttons?.length ? (
          <ButtonSection
            context={context}
            buttons={buttons}
            className="flex self-end mt-5 gap-4 z-[1]"
          />
        ) : null}
        {image?.src ? <Img className="absolute right-0 bottom-0" image={image} /> : null}
      </section>
    );
  },
);

function renderBenefits(benefits: TextBenefit[], version: BlockVersion) {
  return (
    <div className="flex mt-4">
      {benefits.length ? (
        <div className="mr-6 gap-2.5 text-title-2xs">{benefits.map(renderBenefitLabel)}</div>
      ) : null}
      {benefits.length ? (
        <div className="pt-1 text-m">
          {benefits.map((_, i) => renderBenefitDescription(_, i, version))}
        </div>
      ) : null}
    </div>
  );
}

function renderBenefitLabel(benefit: TextBenefit, i: number) {
  return (
    <div key={String(i)} className={`${i ? 'mt-2.5' : ''}`}>
      {benefit.label}
    </div>
  );
}

function renderBenefitDescription(benefit: TextBenefit, i: number, version = 'primary') {
  const labelStyleMap: Record<BlockVersion, string> = {
    primary: 'text-secondary-text',
    secondary: 'text-white',
  };

  return (
    <div key={String(i)} className={`${i ? 'mt-4' : ''} ${labelStyleMap[version]}`}>
      {benefit.description}
    </div>
  );
}

function renderAdditionalDescription(additionalDescription: string, version = 'primary') {
  const descStyleMap: Record<BlockVersion, string> = {
    primary: 'text-secondary-text',
    secondary: 'text-white',
  };

  return <div className={`text-m mt-2.5 ${descStyleMap[version]}`}>{additionalDescription}</div>;
}
