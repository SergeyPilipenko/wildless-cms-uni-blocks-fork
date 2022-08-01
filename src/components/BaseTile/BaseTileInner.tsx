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
      <div className={`flex grow w-full justify-between`}>
        <div className={`flex flex-col justify-between`}>
          <div>
            {description && (
              <div className={`font-normal text-base mt-4 max-w-[600px]`}>{description}</div>
            )}
            {children}
            {items?.length && renderItems(items, version)}
          </div>
          {buttons?.length && (
            <div className="flex mt-9 gap-3">
              {buttons.map((button, index) =>
                renderButton(useLink({ router, handlerDecorator }, button), index),
              )}
            </div>
          )}
        </div>
        {image?.src && <Img className="mt-auto ml-7" image={image} />}
      </div>
    );
  },
);
