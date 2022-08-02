import { Config, createGenerator } from 'ts-json-schema-generator';

const GENERATOR_CONFIG: Config = {
  path: './src/**/*Content.ts',
  skipTypeCheck: true,
  sortProps: true,
  additionalProperties: true,
  extraTags: ['enumNames', 'required'],
};

describe('JSON Schema Generator', () => {
  it('should generate schema according to *Content types', () => {
    const schema = createGenerator(GENERATOR_CONFIG).createSchema();
    expect(schema).toMatchSnapshot();
  });
});
