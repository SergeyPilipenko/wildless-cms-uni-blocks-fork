import fs from 'fs';
import { argv } from 'process';

const [, , schemaFile] = argv;

const sortMap = [
  'title',
  'titleSize',
  'align',
  'description',
  'image',
  'breadcrumbs',
  'benefits',
  'items',
  'steps',
  'cards',
  'accordionItems',
  'columnsMode',
  'qr',
  'rowHeaders',
  'columns',
  'isColoredFirstColumn',
  'visibleRowLength',
  'iconVersion',
  'buttons',
  'version',
  'blockVersion',
  'aboveText',
  'icon',
  'text',
  'fileSize',
  'href',
  'target',
  'documents',
  'bgColor',
];

const schema = JSON.parse(fs.readFileSync(schemaFile));

const mergeObjs = (objs) => objs.reduce((a, b) => Object.assign(a, b), {});

const sortProps = (properties) =>
  mergeObjs(
    Object.entries(properties)
      .sort(([keyA], [keyB]) => sortMap.indexOf(keyA) - sortMap.indexOf(keyB))
      .map(([key, value]) => ({ [key]: value })),
  );

const definitions = mergeObjs(
  Object.entries(schema.definitions).map(([definitionKey, definition]) => ({
    [definitionKey]: {
      ...definition,
      ...(definition.properties ? { properties: sortProps(definition.properties) } : {}),
    },
  })),
);

fs.writeFileSync(
  schemaFile,
  JSON.stringify({
    ...schema,
    definitions,
  }),
);
