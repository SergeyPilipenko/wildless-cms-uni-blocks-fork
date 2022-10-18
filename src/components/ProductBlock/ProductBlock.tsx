import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { BlockVersion } from '../../model/BlockVersion';
import type { UniBlockProps } from '../../types';
import type { ProductBlockContent } from './ProductBlockContent';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Breadcrumb } from '../../ui-kit/Breadcrumb';
import { joinList } from '../../utils/joinList';
import { ProductBlockInner } from './ProductBlockInner';
import { renderBackwardButton } from './renderBackwardButton';
import { VersionStyleMap } from '../../model/BlockVersion';

export interface ProductBlockProps extends ProductBlockContent, UniBlockProps {}

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
      className={`font-sans overflow-hidden p-[50px] flex flex-col box-border min-h-[454px] ${VersionStyleMap[version]} ${className}`}
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
        <div className="text-xs-light mb-6">
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
