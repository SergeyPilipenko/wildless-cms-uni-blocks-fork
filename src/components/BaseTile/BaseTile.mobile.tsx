import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { BaseTileInner } from './BaseTileInner';
import type { AlignType, BaseTileCommonProps } from './BaseTileProps';
import { getHeadingType } from './getHeadingType';

const alignBlock: Record<AlignType, string> = {
  left: 'items-start',
  center: 'items-center',
  right: 'items-end',
};

export interface BaseTileProps extends BaseTileCommonProps, UniBlockProps {}

const TITLE_CLASSES = 'font-medium m-0 whitespace-pre-wrap max-w-[600px]';

export const BaseTile = JSX<BaseTileProps>(
  ({
    className,
    context,
    title,
    headingType,
    description,
    children,
    buttons,
    image,
    items,
    version = 'primary',
    align = 'left',
  }) => {
    return (
      <div className={`font-sans flex flex-col grow h-full ${alignBlock[align]}`}>
        {title && (
          <Heading
            type={headingType || getHeadingType(className)}
            className={`${TITLE_CLASSES} ${version === 'primary' ? 'text-primary-text' : ''}`}
            text={title}
          />
        )}
        <BaseTileInner
          context={context}
          buttons={buttons}
          image={image}
          children={children}
          description={description}
          items={items}
        />
      </div>
    );
  },
);
