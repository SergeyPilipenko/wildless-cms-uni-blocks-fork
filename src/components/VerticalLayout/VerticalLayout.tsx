import { JSX } from '@redneckz/uni-jsx';
import type { AlignType } from '../../model/AlignType';
import { BlockVersionWithTransparent } from '../../model/BlockVersion';
import type { JSXBlock, UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import type { GapVersion, VerticalLayoutContent } from './VerticalLayoutContent';

export interface VerticalLayoutProps extends VerticalLayoutContent, UniBlockProps {}

const alignStyle: Record<AlignType, string> = {
  left: 'items-start',
  center: 'items-center',
  right: 'items-end',
};

const gapStyleMap: Record<GapVersion, string> = {
  XXL: 'gap-10',
  XL: 'gap-8',
  L: 'gap-4',
  M: 'gap-3',
  S: 'gap-2',
  XS: 'gap-1',
  '': '',
};

const backgroundStyleMap: Record<BlockVersionWithTransparent, string> = {
  transparent: '',
  primary: 'bg-white',
  secondary: 'bg-primary-main',
};

export const VerticalLayout: JSXBlock<VerticalLayoutProps> = JSX<VerticalLayoutProps>(
  ({ className = '', children, gap = '', align = 'left', version = 'transparent', ...rest }) => (
    <BlockWrapper
      className={[
        'flex flex-col',
        gapStyleMap[gap],
        alignStyle[align],
        backgroundStyleMap[version],
        className,
      ].join(' ')}
      {...rest}
    >
      {children}
    </BlockWrapper>
  ),
);

VerticalLayout.childrenTypes = {
  exclude: ['VerticalLayout'],
};
