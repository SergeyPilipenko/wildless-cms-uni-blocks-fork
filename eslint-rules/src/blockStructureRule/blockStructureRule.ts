import { ESLintUtils, TSESTree } from '@typescript-eslint/utils';
import { basename } from 'path';
import { getBlockSubDir } from '../utils/getBlockSubDir';
import { isBlockMainFile } from '../utils/isBlockMainFile';
import { defaultOptions } from './blockStructureRule.defaultOptions';
import { BlockStructureRuleOptions, meta } from './blockStructureRule.meta';
import { composeAssertions } from './composeAssertions';
import { getExportedConstName } from './getExportedConstName';
import {
  hasBlockContentFile,
  hasBlockFixtureFile,
  hasBlockMainFile,
} from './hasBlockFileWithSuffix';
import { isExcluded } from './isExcluded';

type MessageIds =
  | 'noBlockMainFile'
  | 'noBlockFixtureFile'
  | 'noBlockContentFile'
  | 'invalidBlockExport';

export const blockStructureRule = ESLintUtils.RuleCreator.withoutDocs<
  BlockStructureRuleOptions,
  MessageIds
>({
  create(context) {
    const filename = context.getFilename();
    const [{ blocksDir, exclude = [] }] = context.options;

    if (!filename.includes(blocksDir) || isExcluded(exclude)(filename)) {
      return {};
    }

    const blockName = basename(filename, '.tsx');

    const assertBlockFilePresence =
      (messageId: MessageIds, predicate: (filename: string) => boolean) =>
      (node: TSESTree.Node): boolean => {
        if (predicate(filename)) {
          return true;
        }

        context.report({
          messageId,
          node,
          data: { blocksDir, blockName: getBlockSubDir(filename) },
        });
        return false;
      };
    const assertBlockFileStructure = composeAssertions(
      assertBlockFilePresence('noBlockMainFile', hasBlockMainFile),
      assertBlockFilePresence('noBlockFixtureFile', hasBlockFixtureFile),
      assertBlockFilePresence('noBlockContentFile', hasBlockContentFile),
    );

    const assertExportedBlockName = (node: TSESTree.ExportNamedDeclaration): boolean => {
      if (node.declaration?.type !== 'VariableDeclaration') {
        return true;
      }

      const exportedBlockName = getExportedConstName(node.declaration);
      if (exportedBlockName === blockName) {
        return true;
      }

      context.report({
        messageId: 'invalidBlockExport',
        node,
        data: { blockName },
      });
      return false;
    };

    return {
      ExportAllDeclaration: assertBlockFileStructure,
      ExportDefaultDeclaration: assertBlockFileStructure,
      ExportNamedDeclaration(node) {
        if (!assertBlockFileStructure(node) || !isBlockMainFile(filename)) {
          return;
        }

        if (!assertExportedBlockName(node)) {
          return;
        }
      },
    };
  },
  meta,
  defaultOptions: [defaultOptions],
});
