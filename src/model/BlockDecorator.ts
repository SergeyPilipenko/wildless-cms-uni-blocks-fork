import type { BlockDef, Slot, SlotsMap } from './ContentPageDef';

export const DEFAULT_SLOT_NAME = null;

export type BlockAncestors = [keyof SlotsMap | typeof DEFAULT_SLOT_NAME, ...Slot[]];

export const DEFAULT_ANCESTORS: BlockAncestors = [DEFAULT_SLOT_NAME];

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
