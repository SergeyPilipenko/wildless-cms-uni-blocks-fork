import { JSX } from '@redneckz/uni-jsx';
import type { UniBlockProps } from '../../types';
import { Heading } from '../../ui-kit/Heading/Heading';
import { BaseTileInner } from './BaseTileInner';
import type { BaseTileCommonProps } from './BaseTileProps';
import { getHeadingType } from './getHeadingType';

export interface BaseTileProps extends BaseTileCommonProps, UniBlockProps {}

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
  }) => {
    return (
      <div className={`font-sans flex flex-col grow h-full items-start`}>
        {title && (
          <Heading
            type={headingType || getHeadingType(className)}
            text={title}
            className={`whitespace-pre-wrap max-w-[600px] ${
              version === 'primary' ? 'text-primary-text' : ''
            }`}
          >
            {title}
          </Heading>
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
