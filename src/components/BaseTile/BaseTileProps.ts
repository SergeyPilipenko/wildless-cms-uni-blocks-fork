import type { AlignType } from '../../model/AlignType';
import type { BlockVersion } from '../../model/BlockVersion';
import type { HeadingType } from '../../ui-kit/Heading/HeadingProps';
import type { VNode } from '../../model/VNode';

export interface BaseTileCommonProps {
  title?: VNode;
  headingType?: HeadingType;
  description?: string;
  image?: VNode;
  items?: string[];
  list?: string;
  buttons?: VNode;
  version?: BlockVersion;
  align?: AlignType;
}
