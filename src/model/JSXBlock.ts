import type { UNIComponent } from '@redneckz/uni-jsx';
import type { BlockAncestors, SlotName } from './BlockDecorator';
import type { BlockDef, ContentPageDef } from './ContentPageDef';
import type { VNode } from './VNode';

export interface UniBlockProps {
  className?: string;
  page?: ContentPageDef;
  block?: BlockDef;
  ancestors?: BlockAncestors;
  slots?: Record<string, VNode>;
}

export type JSXBlock<BlockProps extends UniBlockProps = UniBlockProps> = UNIComponent<
  BlockProps,
  any,
  VNode | VNode[]
> & {
  childrenTypes?: string[] | { include?: string[]; exclude?: string[] };
  slots?: (props: BlockProps) => SlotName[];
};
