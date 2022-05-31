import { JSX } from '@redneckz/uni-jsx';
import type { ContentPageContext } from './ContentPageContext';
import { Img } from './Img';
import { BlockVersion, Picture } from './types';
import { BlockItem } from './ui-kit/BlockItem';
import type { ButtonProps } from './ui-kit/Button';
import { Button } from './ui-kit/Button';
import { useLink } from './useLink';

export interface TileContent {
  title?: string;
  description?: string;
  image?: Picture;
  items?: string[];
  buttons?: ButtonProps[];
}

export interface TileProps extends TileContent {
  className?: string;
  version?: BlockVersion;
  context: ContentPageContext;
}

const tileStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};

export const Tile = JSX<TileProps>(
  ({ className, context, title, description, buttons, image, items, version = 'primary' }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;
    return (
      <section
        className={`font-sans p-9 rounded-[40px] flex justify-between items-stretch relative ${
          className || ''
        } ${tileStyleMap[version]}`}
      >
        <div className="flex flex-col w-full">
          {title && (
            <h3 className="font-medium text-title m-0 whitespace-pre-wrap max-w-[600px]">
              {title}
            </h3>
          )}
          <div className="flex justify-between h-full">
            <div className="flex flex-col">
              {description && (
                <div className="font-normal text-base max-w-[600px] mt-4">{description}</div>
              )}
              {items?.length ? (
                <section className="space-y-2.5 mt-5" role="list">
                  {items.map((_, i) => (
                    <BlockItem key={String(i)} text={_} version={version} />
                  ))}
                </section>
              ) : null}
              {buttons?.length ? (
                <div className="flex mt-auto gap-4">
                  {buttons.map((button, index) =>
                    renderButton(useLink({ router, handlerDecorator }, button), index),
                  )}
                </div>
              ) : null}
            </div>
            {image && (
              <div className="mt-auto flex-none h-[220px] w-[220px]">
                <Img image={image} />
              </div>
            )}
          </div>
        </div>
      </section>
    );
  },
);

function renderButton(button: ButtonProps, i: number) {
  return button?.text ? (
    <Button key={String(i)} {...button} className="mt-8" version={button.version} />
  ) : null;
}
