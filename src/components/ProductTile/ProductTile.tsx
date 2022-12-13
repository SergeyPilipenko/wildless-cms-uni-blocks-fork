import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import { VersionStyleMap } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { Picture } from '../../model/Picture';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Img } from '../../ui-kit/Img/Img';
import { getTileRightPadding } from '../BaseTile/getTileRightPadding';
import { Headline } from '../Headline/Headline';
import type { ProductTileContent, TextBenefit } from './ProductTileContent';

export interface ProductTileProps extends ProductTileContent, UniBlockProps {}

export const ProductTile = JSX<ProductTileProps>(
  ({
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
  }) => (
    <BlockWrapper
      className={`overflow-hidden font-sans p-9 box-border relative justify-between grid min-h-[364px]
          ${className} ${VersionStyleMap[version]} ${getTileRightPadding(className)}`}
      {...rest}
    >
      <Headline
        className={`!p-0 !bg-transparent z-10 ${title || description ? 'mb-3.5' : ''}`}
        as="h2"
        title={title}
        description={description}
        headlineVersion={headlineVersion}
        bgColorHeadline={version}
        align="left"
        {...rest}
      />
      {renderBenefits(benefits, version, image)}
      {additionalDescription
        ? renderAdditionalDescription(additionalDescription, image, version)
        : null}
      {buttons?.length ? (
        <ButtonSection buttons={buttons} className="flex self-end mt-5 gap-4 z-10 text-l" />
      ) : null}
      {image?.src ? <Img className="absolute right-0 bottom-0" image={image} /> : null}
    </BlockWrapper>
  ),
);

function renderBenefits(benefits: TextBenefit[], version: BlockVersion, image?: Picture) {
  // picture width = 242px. Text can overlay picture 20px deep. Outer paddings_x = 36px. 242-36-20 = 186px
  const BENEFITS_WIDTH = image?.src ? 'max-w-[calc(100%-186px)]' : '100%';

  return (
    <div
      className={`z-10 grid grid-cols-[max-content_1fr] auto-rows-auto gap-x-6 gap-y-2.5 items-baseline
        ${BENEFITS_WIDTH}`}
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

  return function renderVersionedBenefit(benefit: TextBenefit, i: number) {
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

function renderAdditionalDescription(
  additionalDescription: string,
  image?: Picture,
  version: BlockVersion = 'primary',
) {
  const descStyleMap: Record<BlockVersion, string> = {
    primary: 'text-secondary-text',
    secondary: 'text-white',
  };

  // picture width = 242px. Text can overlay picture 20px deep. Outer paddings_x = 36px. 242-36-20 = 186px
  const DESCRIPTION_WIDTH = image?.src ? 'max-w-[calc(100%-186px)]' : '100%';

  return (
    <div className={`text-m-light mt-2.5 z-10 ${DESCRIPTION_WIDTH} ${descStyleMap[version]}`}>
      {additionalDescription}
    </div>
  );
}
