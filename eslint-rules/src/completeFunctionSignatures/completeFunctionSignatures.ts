import type {
  ArrowFunctionExpression,
  FunctionDeclaration,
  Parameter,
  SourceLocation,
  TSFunctionType,
} from '@typescript-eslint/types/dist/generated/ast-spec';
import { AST_NODE_TYPES } from '@typescript-eslint/types/dist/generated/ast-spec';
import { ESLintUtils, TSESTree } from '@typescript-eslint/utils';
import { meta } from './completeFunctionSignatures.meta';

type MessageIds = 'default';

export const completeFunctionSignatures = ESLintUtils.RuleCreator.withoutDocs<
  readonly unknown[],
  MessageIds
>({
  create(context) {
    const handleReportLocations = (locations: SourceLocation[], node: TSESTree.Node) => {
      locations.forEach((loc) =>
        context.report({
          node,
          messageId: 'default',
          loc,
        }),
      );
    };

    return {
      ArrowFunctionExpression(node) {
        const invalidLocations = getArrowInvalidNodesLocations(node);
        handleReportLocations(invalidLocations, node);
      },
      FunctionDeclaration(node) {
        const invalidLocations = getFunctionInvalidNodesLocations(node);
        handleReportLocations(invalidLocations, node);
      },
      TSFunctionType(node) {
        const invalidLocations = getFunctionInvalidNodesLocations(node);
        handleReportLocations(invalidLocations, node);
      },
    };
  },
  meta,
  defaultOptions: [{}],
});

const handleFilterParams = (param: Parameter) => {
  if (param.type === AST_NODE_TYPES.TSParameterProperty) {
    return false;
  }

  if (param.type === AST_NODE_TYPES.AssignmentPattern) {
    return param.right.type !== AST_NODE_TYPES.Literal && !param.left.typeAnnotation;
  }

  return !param.typeAnnotation;
};

const getArrowInvalidNodesLocations = (node: ArrowFunctionExpression) => {
  if (node.parent?.type !== AST_NODE_TYPES.VariableDeclarator || node.parent.id.typeAnnotation) {
    return [];
  }
  const invalidParams = node.params?.filter(handleFilterParams);

  return invalidParams.map((_) => _.loc);
};

const getFunctionInvalidNodesLocations = (node: FunctionDeclaration | TSFunctionType) => {
  const invalidParams = node.params?.filter(handleFilterParams);

  return invalidParams.map((_) => _.loc);
};
