import type { UNIComponent } from '@redneckz/uni-jsx';
import type { ContentPageContext } from '../components/ContentPage/ContentPageContext';
import type { BlockAncestors, SlotName } from './BlockDecorator';
import type { ContentPageDef } from './ContentPageDef';
import type { VNode } from './VNode';

export interface UniBlockProps {
  className?: string;
  context: ContentPageContext;
  page?: ContentPageDef;
  ancestors?: BlockAncestors;
  labels?: string[];
  anchor?: string;
  slots?: Record<string, VNode>;
}

export type JSXBlock<BlockProps = Record<string, any>> = UNIComponent<
  BlockProps & UniBlockProps,
  any,
  VNode | VNode[]
> & {
  childrenTypes?: string[] | { include?: string[]; exclude?: string[] };
  slots?: (props: BlockProps) => SlotName[];
  renderChild?: (child: VNode, i: number) => VNode;
};
