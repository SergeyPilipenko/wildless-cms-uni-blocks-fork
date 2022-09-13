import { ESLintUtils } from '@typescript-eslint/utils';
import { defaultOptions } from './transformToTernaryRule.defaultOptions';
import { transformToTernaryRuleOptions, meta } from './transformToTernaryRule.meta';

type MessageIds = 'default';

export const transformToTernaryRule = ESLintUtils.RuleCreator.withoutDocs<
  transformToTernaryRuleOptions,
  MessageIds
>({
  create(context) {
    const getInvalidNodesLocations = (node) => {
      const type = node.declaration?.type || '';
      if (type === 'VariableDeclaration') {
        const { tokensAndComments: tokens } = context.getSourceCode();

        return tokens
          .filter(
            (_, i) =>
              _.type === 'Punctuator' &&
              _.value === '&&' &&
              tokens[i - 1]?.type === 'Identifier' &&
              tokens[i + 1]?.type === 'Punctuator' &&
              tokens[i + 1]?.value === '<' &&
              tokens[i + 2]?.type === 'JSXIdentifier',
          )
          .map((_) => _.loc);
      }
    };

    return {
      ExportNamedDeclaration(node) {
        const invalidLocations = getInvalidNodesLocations(node);

        if (invalidLocations?.length) {
          invalidLocations.forEach((_) => {
            context.report({
              node,
              messageId: 'default',
              loc: _,
            });
          });
        }
      },
    };
  },
  meta,
  defaultOptions: [defaultOptions],
});
