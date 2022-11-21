import fs from 'fs';
import process from 'process';
import { createGenerator } from 'ts-json-schema-generator';
import { promisify } from 'util';
import sortIndex from './schema-sort-index.js';

const writeFile = promisify(fs.writeFile);

const [, , schemaFile] = process.argv;

/** @type {import('ts-json-schema-generator/dist/src/Config').Config} */
const GENERATOR_CONFIG = {
  path: './src/components/**/*Content.ts',
  skipTypeCheck: true,
  additionalProperties: true,
  sortProps: false,
  extraTags: ['enumNames', 'required'],
  minify: true,
};

(async () => {
  const schema = createGenerator(GENERATOR_CONFIG).createSchema();

  const definitions = mergeObjs(
    Object.entries(schema.definitions).map(([definitionKey, definition]) => ({
      [definitionKey]: {
        ...definition,
        ...(definition.properties ? { properties: sortProps(definition.properties) } : {}),
      },
    })),
  );

  await writeFile(schemaFile, JSON.stringify({ ...schema, definitions }));
})();

function mergeObjs(objs) {
  return objs.reduce((a, b) => Object.assign(a, b), {});
}

function sortProps(properties) {
  return mergeObjs(
    Object.entries(properties)
      .sort(([keyA], [keyB]) => sortIndex.indexOf(keyA) - sortIndex.indexOf(keyB))
      .map(([key, value]) => ({ [key]: value })),
  );
}
