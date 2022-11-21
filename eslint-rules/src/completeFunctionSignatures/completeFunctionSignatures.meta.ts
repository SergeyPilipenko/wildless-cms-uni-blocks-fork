import type { RuleMetaData } from '../RuleMetaData';

const schema = {
  type: 'object',
  required: [],
};

export const meta: RuleMetaData = {
  docs: {
    description: 'Должен быть указан тип параметра при объявлении функции',
    recommended: 'warn',
  },
  messages: {
    default: 'Параметр имеет неявно заданный тип "any"',
  },
  type: 'suggestion',
  schema: [schema],
};
