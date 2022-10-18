import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import type { ProductTileContent, TextBenefit } from './ProductTileContent';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Img } from '../../ui-kit/Img/Img';
import { getTileMinHeight } from '../BaseTile/getTileMinHeight';
import { getTileRightPadding } from '../BaseTile/getTileRightPadding';
import { Headline } from '../Headline/Headline';
import { VersionStyleMap } from '../../model/BlockVersion';

export interface ProductTileProps extends ProductTileContent, UniBlockProps {}

export const ProductTile = JSX<ProductTileProps>(
  ({
    context,
    className = '',
    title,
    headlineVersion = 'S',
    description,
    additionalDescription,
    benefits = [],
    buttons,
    image,
    version = 'primary',
    ...rest
  }) => {
    return (
      <BlockWrapper
        context={context}
        className={`overflow-hidden font-sans p-9 box-border relative justify-between grid ${className} ${
          VersionStyleMap[version]
        } ${getTileRightPadding(className)} ${getTileMinHeight(className)}`}
        {...rest}
      >
        <Headline
          context={context}
          className={`!p-0 z-10 ${title || description ? 'mb-3.5' : ''}`}
          as="h2"
          title={title}
          description={description}
          headlineVersion={headlineVersion}
          bgColorHeadline={version}
          align="left"
        />
        {renderBenefits(benefits, version)}
        {additionalDescription ? renderAdditionalDescription(additionalDescription, version) : null}
        {buttons?.length ? (
          <ButtonSection
            context={context}
            buttons={buttons}
            className="flex self-end mt-5 gap-4 z-10 text-l"
          />
        ) : null}
        {image?.src ? <Img className="absolute right-0 bottom-0" image={image} /> : null}
      </BlockWrapper>
    );
  },
);

// picture width = 242px. Text can overlay picture 20px deep. Outer paddings_x = 36px. 242-36-20 = 186px
const BENEFITS_WIDTH = 'max-w-[calc(100%-186px)]';

function renderBenefits(benefits: TextBenefit[], version: BlockVersion) {
  return (
    <div
      className={`z-10 grid grid-cols-[max-content_1fr] auto-rows-auto gap-x-6 gap-y-2.5 items-baseline ${BENEFITS_WIDTH}`}
    >
      {benefits.length ? benefits.map(renderBenefit(version)) : null}
    </div>
  );
}

function renderBenefit(version: BlockVersion = 'primary') {
  const labelStyleMap: Record<BlockVersion, string> = {
    primary: 'text-secondary-text',
    secondary: 'text-white',
  };

  return function renderVersionedBenefit(benefit: TextBenefit, i) {
    const { label = '', description = '' } = benefit;

    return [
      <div key={`label-${i}`} className="text-h6">
        {label}
      </div>,
      <div key={`desc-${i}`} className={`text-m-light ${labelStyleMap[version]}`}>
        {description}
      </div>,
    ];
  };
}

function renderAdditionalDescription(additionalDescription: string, version = 'primary') {
  const descStyleMap: Record<BlockVersion, string> = {
    primary: 'text-secondary-text',
    secondary: 'text-white',
  };

  return (
    <div className={`text-m-light mt-2.5 ${descStyleMap[version]}`}>{additionalDescription}</div>
  );
}
