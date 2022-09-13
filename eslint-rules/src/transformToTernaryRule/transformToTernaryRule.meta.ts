import type { RuleMetaData } from '../RuleMetaData';

export type transformToTernaryRuleOptions = [
  {
    componentsDir: string;
    exclude: RegExp[];
  },
];

const schema = {
  type: 'object',
  required: [],
  properties: {
    componentsDir: {
      type: 'string',
    },
    exclude: {
      type: 'array',
      items: {
        type: 'object',
      },
    },
  },
};

export const meta: RuleMetaData = {
  docs: {
    description:
      'Проверка использования тернарного оператора в условиях вида "<имя переменной> ? JSX<tagName> : null"',
    recommended: 'warn',
  },
  messages: {
    default:
      'Конструкцию вида "condition && <tagName />" трансформируйте с использованием тернарного оператора - "condition ? <tagName> : null"',
  },
  type: 'suggestion',
  schema: [schema],
};
