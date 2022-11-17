import type { UNIComponent } from '@redneckz/uni-jsx';
import type { UniBlockProps } from './ContentPageDef';
import type { VNode } from './VNode';

export type JSXBlock<BlockProps = Record<string, any>> = UNIComponent<
  BlockProps & UniBlockProps,
  any,
  VNode | VNode[]
> & {
  childrenTypes?: string[];
  renderChild?: (child: VNode, i: number) => VNode;
};

export type BlocksRegistry<BlockProps = Record<string, any>> = Record<string, JSXBlock<BlockProps>>;
