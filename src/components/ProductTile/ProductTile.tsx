import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Description } from '../../ui-kit/Description/Description';
import { Heading } from '../../ui-kit/Heading/Heading';
import { Img } from '../../ui-kit/Img/Img';
import { BaseTile } from '../BaseTile/BaseTile';
import { getTileMinHeight } from '../BaseTile/getTileMinHeight';
import { getTileRightPadding } from '../BaseTile/getTileRightPadding';
import type { TextBenefit } from '../BenefitsBlock/BenefitsBlockContent';
import type { ProductTileContent } from './ProductTileContent';

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
        className={`bg-white overflow-hidden text-primary-text font-sans p-9 box-border ${className} ${
          productTileStyleMap[version]
        } ${getTileRightPadding(className)} ${getTileMinHeight(className)} `}
        id={anchor}
      >
        <BaseTile
          context={context}
          title={
            title ? (
              <Heading
                headingType={headingType}
                as="h3"
                title={title}
                className={`whitespace-pre-wrap max-w-[600px]`}
              />
            ) : null
          }
          buttons={
            buttons?.length ? (
              <ButtonSection context={context} buttons={buttons} className="flex mt-9 gap-3" />
            ) : null
          }
          image={image?.src && <Img className="mt-auto ml-7" image={image} />}
        >
          {description ? (
            <Description className="mt-4 max-w-[600px]" description={description} />
          ) : null}
          {renderBenefits(benefits, version)}

          {additionalDescription
            ? renderAdditionalDescription(additionalDescription, version)
            : null}
        </BaseTile>
      </section>
    );
  },
);

function renderBenefits(benefits: TextBenefit[] = [], version: BlockVersion) {
  return (
    <div className="flex mt-5 mb-1">
      {benefits.length ? <div className="mr-8">{benefits.map(renderBenefitLabel)}</div> : null}
      {benefits.length ? (
        <div className="pt-1">
          {benefits.map((_, i) => renderBenefitDescription(_, i, version))}
        </div>
      ) : null}
    </div>
  );
}

function renderBenefitLabel(benefit: TextBenefit, i: number) {
  return (
    <div key={String(i)} className={`text-xl font-medium ${i ? 'mt-2.5' : ''}`}>
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
    <div key={String(i)} className={`text-sm ${i ? 'mt-4' : ''} ${labelStyleMap[version]}`}>
      {benefit.description}
    </div>
  );
}

function renderAdditionalDescription(additionalDescription: string, version = 'primary') {
  const descStyleMap: Record<BlockVersion, string> = {
    primary: 'text-secondary-text',
    secondary: 'text-white',
  };
  return <div className={`text-sm mt-2.5 ${descStyleMap[version]}`}>{additionalDescription}</div>;
}
