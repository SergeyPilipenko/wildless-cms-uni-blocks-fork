import { RollupItem } from '../RollupItem/RollupItem';
import { TextBlock } from '../TextBlock/TextBlock';
import { TEXT_BLOCK } from '../TextBlock/TextBlock.fixture';

const TEXT_BLOCK_ACCORDION_BLOCK = <TextBlock className="col-span-12" {...TEXT_BLOCK} />;

export default {
  default: (
    <RollupItem label="Rollup button 1">
      {[TEXT_BLOCK_ACCORDION_BLOCK, TEXT_BLOCK_ACCORDION_BLOCK]}
    </RollupItem>
  ),
  secondary: (
    <RollupItem label="Rollup button 2" version="secondary" isFoldButtonOnTop={false}>
      {[TEXT_BLOCK_ACCORDION_BLOCK, TEXT_BLOCK_ACCORDION_BLOCK]}
    </RollupItem>
  ),
  'secondary default-open': (
    <RollupItem isExpanded={true} version="secondary" label="Rollup button 2">
      {[TEXT_BLOCK_ACCORDION_BLOCK, TEXT_BLOCK_ACCORDION_BLOCK]}
    </RollupItem>
  ),
};
