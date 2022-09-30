import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Breadcrumb } from '../../ui-kit/Breadcrumb';
import { joinList } from '../../utils/joinList';
import type { ProductBlockContent } from './ProductBlockContent';
import { ProductBlockInner } from './ProductBlockInner';
import { renderBackwardButton } from './renderBackwardButton';

export interface ProductBlockProps extends ProductBlockContent, UniBlockProps {}

const productBlockStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

const breadcrumbsStyleMap: Record<BlockVersion, string> = {
  primary: 'text-secondary-text',
  secondary: 'text-white/80',
};

export const ProductBlock = JSX<ProductBlockProps>((props) => {
  const {
    context,
    className = '',
    breadcrumbs,
    backwardButton,
    version = 'primary',
    ...otherProps
  } = props;
  const router = context.useRouter();
  const { handlerDecorator } = context;

  return (
    <BlockWrapper
      context={context}
      className={`font-sans overflow-hidden pt-[50px] pl-[50px] pb-[50px] pr-[7.5rem] box-border min-h-[420px] ${productBlockStyleMap[version]} ${className}`}
      {...otherProps}
    >
      {backwardButton?.text
        ? renderBackwardButton(
            useLink({ router, handlerDecorator }, backwardButton),
            version,
            'mb-10 -mt-2.5',
          )
        : null}
      {breadcrumbs?.length ? (
        <div className="text-xs mb-6">
          {joinList(<span className={`mx-2 ${breadcrumbsStyleMap[version]}`}>/</span>)(
            breadcrumbs.map((breadcrumb, i) => (
              <Breadcrumb
                key={String(i)}
                {...useLink(
                  { router, handlerDecorator },
                  { className: breadcrumbsStyleMap[version], ...breadcrumb },
                )}
              />
            )),
          )}
        </div>
      ) : null}
      <ProductBlockInner context={context} version={version} {...otherProps} />
    </BlockWrapper>
  );
});
