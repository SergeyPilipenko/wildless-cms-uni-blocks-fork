import type { JSXBlock } from './JSXBlock';

export type BlocksRegistry<BlockProps = Record<string, any>> = Record<string, JSXBlock<BlockProps>>;
