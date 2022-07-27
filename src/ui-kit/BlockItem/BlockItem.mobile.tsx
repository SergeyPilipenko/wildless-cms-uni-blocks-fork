import { JSX } from '@redneckz/uni-jsx';
import type { BlockVersion } from '../../model/BlockVersion';
import { BlockItemProps, BlockItemVersion } from './BlockItemProps';

const LIST_STYLE_CLASSES = 'inline-block mr-3';

const TEXT_STYLE_MAP: Record<BlockItemVersion, string> = {
  primary: 'text-primary-text',
  secondary: 'text-secondary-text',
};

const LIST_STYLE_MAP: Record<BlockItemVersion, string> = {
  primary:
    'bg-primary-main bg-secondary-text w-[6px] h-[6px] min-w-[6px] min-h-[6px] mt-2.5 rounded-full',
  secondary:
    'bg-secondary-text bg-white w-[6px] h-[6px] min-w-[6px] min-h-[6px] mt-2.5 rounded-full',
};

export const BlockItem = JSX<BlockItemProps>(
  ({ className, isDotted = true, text, children, version = 'primary', white }) => {
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
      ? 'w-[8px] h-[8px] min-w-[8px] min-h-[8px] mt-2'
      : 'w-[6px] h-[6px] min-w-[6px] min-h-[6px] mt-2.5';

  return `${LIST_STYLE_CLASSES} ${color} ${size}`;
};
