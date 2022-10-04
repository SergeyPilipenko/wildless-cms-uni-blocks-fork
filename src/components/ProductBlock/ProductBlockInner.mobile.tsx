import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Headline } from '../Headline/Headline';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { BaseTile } from '../BaseTile/BaseTile';
import type { ProductBlockInnerContent } from './ProductBlockContent';
import type { BlockVersion } from '../../model/BlockVersion';
import { renderBenefit } from './renderBenefit';

export type ProductBlockInnerProps = ProductBlockInnerContent & UniBlockProps;

export const ProductBlockInner = JSX<ProductBlockInnerProps>(
  ({
    className = '',
    context,
    title,
    headlineVersion = 'L',
    description,
    benefits,
    benefitsVersion = 'normal',
    buttons,
    image,
    items,
    version = 'primary',
    isDotted = true,
    label,
  }) => {
    return (
      <div className={`w-full ${className}`}>
        <div>
          {label ? renderLabel(label, version) : null}
          <Headline
            context={context}
            className="!p-0 max-w-[600px]"
            title={title}
            description={description}
            headlineVersion={headlineVersion}
          />
          <BaseTile
            context={context}
            buttons={
              buttons?.length ? (
                <ButtonSection
                  context={context}
                  buttons={buttons}
                  className="flex flex-col mt-5 gap-2.5"
                />
              ) : null
            }
          >
            {benefits?.filter((_) => _.label)?.length ? (
              <div className="mt-3">
                {benefits.map((benefit, i) =>
                  renderBenefit({ benefit, version, benefitsVersion }, i),
                )}
              </div>
            ) : null}
            {items?.length ? (
              <List className="mt-3 text-m" items={items} version={version} isDotted={isDotted} />
            ) : null}
          </BaseTile>
        </div>
        {renderImage(image)}
      </div>
    );
  },
);

function renderImage(image) {
  return image?.src ? (
    <Img imageClassName="mt-5 mx-auto block" image={{ className: 'block', ...image }} />
  ) : null;
}

const labelStyleMap: Record<BlockVersion, string> = {
  primary: 'text-primary-main border-secondary-hover',
  secondary: 'text-white/80',
};

const renderLabel = (label: string, version: BlockVersion) => (
  <div
    className={`m-xs px-2.5 py-1.5 mb-5 rounded-md border-2 border-solid w-fit ${labelStyleMap[version]}`}
  >
    {label}
  </div>
);
