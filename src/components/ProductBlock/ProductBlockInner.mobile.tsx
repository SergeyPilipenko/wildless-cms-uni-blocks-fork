import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { Picture } from '../../model/Picture';
import { ButtonSection } from '../../ui-kit/Button/ButtonSection';
import { Img } from '../../ui-kit/Img/Img';
import { List } from '../../ui-kit/List/List';
import { BaseTile } from '../BaseTile/BaseTile';
import { Headline } from '../Headline/Headline';
import type { ProductBlockInnerContent } from './ProductBlockContent';
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
            bgColorHeadline={version}
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
              <div className="mt-3">{benefits.map(renderBenefit(version, benefitsVersion))}</div>
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

function renderImage(image?: Picture) {
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
    className={`px-2.5 py-1.5 mb-5 rounded-md border-2 border-solid w-fit ${labelStyleMap[version]}`}
  >
    {label}
  </div>
);
