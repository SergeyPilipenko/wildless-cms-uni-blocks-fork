import { JSX } from '@redneckz/uni-jsx';
import { BlockItem } from '../../ui-kit/BlockItem/BlockItem';
import { Img } from '../../ui-kit/Img';
import type { Picture } from '../../model/Picture';
import type { UniBlockProps } from '../../types';
import type { TextBlockContent, TextBlockVersion } from './TextBlockContent';

export interface TextBlockProps extends TextBlockContent, UniBlockProps {}

const textBlockStyleMaps: Record<TextBlockVersion, Record<string, string>> = {
  primary: {
    background: 'bg-white',
    icon: 'bg-primary-main text-white',
    title: 'text-primary-text',
    description: 'text-secondary-text',
  },
  secondary: {
    background: 'bg-primary-main',
    icon: 'bg-white text-primary-main',
    title: 'text-white',
    description: 'text-white',
  },
  'secondary-light': {
    background: 'bg-primary-main/10',
    icon: 'bg-primary-main text-white',
    title: 'text-primary-text',
    description: 'text-secondary-text',
  },
};

export const TextBlock = JSX<TextBlockProps>(
  ({
    title,
    description,
    blockVersion = 'primary',
    iconVersion,
    image,
    className = '',
    items,
    isDotted = true,
  }) => {
    const textBlockStyleMap = textBlockStyleMaps[blockVersion];
    return (
      <section
        className={`font-sans px-4 py-[18px] flex flex-col ${textBlockStyleMap.background} ${className}`}
      >
        {iconVersion === 'small' ? renderIcon(textBlockStyleMap.icon) : null}
        {iconVersion === 'big' ? renderImage(image) : null}
        <div className="py-0.5">
          {title ? (
            <div className={`font-medium text-base mb-1 ${textBlockStyleMap.title}`}>{title}</div>
          ) : null}
          {description ? (
            <div className={`text-sm ${textBlockStyleMap.description}`}>{description}</div>
          ) : null}
          {items?.length ? renderItems(items, isDotted, blockVersion) : null}
        </div>
      </section>
    );
  },
);

function renderItems(items: string[] = [], isDotted: boolean, version?: TextBlockVersion) {
  return (
    <section className="mt-1 text-secondary-text" role="list">
      {items.map((_, i) => (
        <BlockItem
          key={String(i)}
          className={`text-m-sm ${version === 'secondary' ? 'opacity-80' : ''}`}
          text={_}
          isDotted={isDotted}
          version={version === 'secondary' ? version : 'gray'}
        />
      ))}
    </section>
  );
}

function renderIcon(className: string) {
  return (
    <div className="mb-3">
      <div className={`rounded-full h-4 w-4 text-center text-xs ${className}`}>i</div>
    </div>
  );
}

function renderImage(image?: Picture) {
  return image?.src ? <Img className="pb-3 mr-auto" image={image} /> : null;
}
