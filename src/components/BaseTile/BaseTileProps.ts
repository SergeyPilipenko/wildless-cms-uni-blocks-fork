import type { AlignType } from '../../model/AlignType';
import type { BlockVersion } from '../../model/BlockVersion';
import type { HeadingType } from '../../ui-kit/Heading/HeadingContent';

export interface BaseTileCommonProps {
  title?: any;
  headingType?: HeadingType;
  description?: string;
  image?: any;
  items?: string[];
  list?: string;
  buttons?: any;
  version?: BlockVersion;
  align?: AlignType;
}
