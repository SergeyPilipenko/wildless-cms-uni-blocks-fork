#!/usr/bin/env node

import glob from 'glob';
import { promisify } from 'util';
import { migrateContentUnit } from './migrateContentUnit.js';
import { loadedScripts, migrationScripts } from './migration-scripts/index.js';

const findFiles = promisify(glob);

const [, , fromVersion, toVersion] = process.argv;

const CONTENT_DIR = './content';

const fromVersionIndex = findVersionIndex(migrationScripts)(fromVersion);
const toVersionIndex = findVersionIndex(migrationScripts)(toVersion);

const requiredScripts = loadedScripts.slice(fromVersionIndex, toVersionIndex);

if (requiredScripts.length) {
  console.log(
    'Following scripts will be applied: ',
    requiredScripts.map(({ description }) => description),
  );

  const contentFiles = await findFiles(`${CONTENT_DIR}/**/*.json`);

  await Promise.allSettled(contentFiles.map(migrateContentUnit(requiredScripts)));
}

console.log('Everything is up to date');

function findVersionIndex(versionsList) {
  return (version) => {
    const index = versionsList.findIndex((_) => _ === `${version}.js`);

    if (version && index === -1) {
      throw new Error(`Version ${version} not found`);
    }

    return index !== -1 ? index : undefined;
  };
}
