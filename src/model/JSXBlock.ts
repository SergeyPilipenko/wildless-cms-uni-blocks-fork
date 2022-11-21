import type { UNIComponent } from '@redneckz/uni-jsx';
import type { ContentPageContext } from '../components/ContentPage/ContentPageContext';
import type { BlockAncestors } from './BlockDecorator';
import type { ContentPageDef } from './ContentPageDef';
import type { VNode } from './VNode';

export interface UniBlockProps {
  className?: string;
  context: ContentPageContext;
  page?: ContentPageDef;
  ancestors?: BlockAncestors;
  labels?: string[];
  anchor?: string;
}

export type JSXBlock<BlockProps = Record<string, any>> = UNIComponent<
  BlockProps & UniBlockProps,
  any,
  VNode | VNode[]
> & {
  childrenTypes?: string[];
  renderChild?: (child: VNode, i: number) => VNode;
};
