import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import { VersionStyleMap } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Breadcrumb } from '../../ui-kit/Breadcrumb';
import { joinList } from '../../utils/joinList';
import type { ProductBlockContent } from './ProductBlockContent';
import { ProductBlockInner } from './ProductBlockInner';
import { renderBackwardButton } from './renderBackwardButton';

export interface ProductBlockProps extends ProductBlockContent, UniBlockProps {}

const breadcrumbsStyleMap: Record<BlockVersion, string> = {
  primary: 'text-secondary-text',
  secondary: 'text-white/80',
};

export const ProductBlock = JSX<ProductBlockProps>((props) => {
  const { className = '', breadcrumbs, backwardButton, version = 'primary', ...rest } = props;
  const buttonVersion = version === 'primary' ? version : 'white';

  return (
    <BlockWrapper
      className={`font-sans overflow-hidden p-[50px] flex flex-col box-border min-h-[454px] ${VersionStyleMap[version]} ${className}`}
      {...rest}
    >
      {backwardButton?.text
        ? renderBackwardButton(backwardButton, buttonVersion, 'mb-10 -mt-2.5')
        : null}
      {breadcrumbs?.length ? (
        <div className="text-xs-light mb-6">
          {joinList(<span className={`mx-2 ${breadcrumbsStyleMap[version]}`}>/</span>)(
            breadcrumbs.map((breadcrumb, i) => (
              <Breadcrumb
                key={String(i)}
                className={breadcrumbsStyleMap[version]}
                {...breadcrumb}
              />
            )),
          )}
        </div>
      ) : null}
      <ProductBlockInner version={version} {...rest} />
    </BlockWrapper>
  );
});
