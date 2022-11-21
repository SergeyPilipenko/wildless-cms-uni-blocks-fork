import { blockStructureRule } from './blockStructureRule';
import { completeFunctionSignatures } from './completeFunctionSignatures';
import { consistentBlocksRegistryRule } from './consistentBlocksRegistryRule';
import { noIndexFileRule } from './noIndexFileRule/noIndexFileRule';
import { transformToTernaryRule } from './transformToTernaryRule';

export const rules = {
  'consistent-blocks-registry': consistentBlocksRegistryRule,
  'block-structure': blockStructureRule,
  'no-index-file': noIndexFileRule,
  'transform-to-ternary': transformToTernaryRule,
  'complete-function-signatures': completeFunctionSignatures,
};
