import type { BlockDef, Slot } from './ContentPageDef';

export const DEFAULT_SLOT_NAME = null;

export type SlotName = string | typeof DEFAULT_SLOT_NAME;
export type BlockAncestorItem = [Slot, SlotName];
export type BlockAncestors = BlockAncestorItem[];

interface BlockDecoratorProps<VNode> {
  blockClassName: string;
  block: BlockDef;
  ancestors: BlockAncestors; // Is needed to simplify page editor logic
  render: (props: { blockClassName: string; block: BlockDef }) => VNode;
}

export type BlockDecorator<VNode = any> = (
  props: BlockDecoratorProps<VNode>,
  index?: number | string,
) => any;
