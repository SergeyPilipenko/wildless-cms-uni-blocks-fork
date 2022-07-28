import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import { BlockItemProps, BlockItemVersion } from './BlockItemProps';

const LIST_STYLE_CLASSES = 'rounded-full inline-block mr-3';

const TEXT_STYLE_MAP: Record<BlockItemVersion, string> = {
  primary: 'text-primary-text',
  secondary: 'text-secondary-text',
};

const LIST_STYLE_MAP: Record<BlockItemVersion, string> = {
  primary: 'bg-primary-main',
  secondary: 'bg-secondary-text',
};

export const BlockItem = JSX<BlockItemProps>(
  ({ className = '', isDotted = true, text, children, version = 'primary', white }) => {
    return (
      <div className={`font-sans flex items-baseline ${className}`} role="listitem">
        {isDotted && <div className={getListStyle(version, white)} />}
        <span className={white ? 'text-white' : TEXT_STYLE_MAP[version]}>{text || children}</span>
      </div>
    );
  },
);

const getListStyle = (version: BlockVersion, white?: boolean) => {
  const color = white ? 'bg-white' : LIST_STYLE_MAP[version];
  const size =
    version === 'primary'
      ? 'w-2 h-2 min-w-2 min-h-2 mt-2'
      : 'w-[6px] h-[6px] min-w-[6px] min-h-[6px] mt-2.5';

  return `${LIST_STYLE_CLASSES} ${color} ${size}`;
};
