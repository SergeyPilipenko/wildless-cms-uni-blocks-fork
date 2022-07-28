import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { UniBlockProps } from '../../types';
import { Img } from '../../ui-kit/Img';
import type { BaseTileMainProps } from './BaseTileProps';
import { renderButton } from './renderButton';
import { renderItems } from './renderItems';

export interface BaseTileInnerProps extends BaseTileMainProps, UniBlockProps {}

export const BaseTileInner = JSX<BaseTileInnerProps>(
  ({ context, description, children, buttons, image, items, version = 'primary' }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;
    return (
      <div>
        {description && <div className={`font-normal text-base mt-3`}>{description}</div>}
        {children}
        {items?.length && renderItems(items, version)}
        {buttons?.length && (
          <div className="mt-[18px]">
            {buttons.map((button, index) =>
              renderButton(useLink({ router, handlerDecorator }, button), index),
            )}
          </div>
        )}
        {image?.src && <Img className="mt-auto ml-7" image={image} />}
      </div>
    );
  },
);
