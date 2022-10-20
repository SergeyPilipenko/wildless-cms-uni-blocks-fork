import { readFile, writeFile } from 'fs/promises';

export function migrateContentUnit(migrationScripts) {
  const contentProcessor = migrationScripts.map((_) => _.default).reduce(composeMigrationScripts);

  return async (unitPath) => {
    console.log('Start processing of:', unitPath);
    try {
      const content = JSON.parse(await readFile(unitPath, 'utf-8'));

      await writeFile(
        unitPath,
        JSON.stringify(contentProcessor(unitPath, content), undefined, 2),
        'utf-8',
      );
    } catch (ex) {
      console.warn(ex);
    } finally {
      console.log('End processing of:', unitPath);
    }
  };
}

function composeMigrationScripts(scriptA, scriptB) {
  return (unitPath, content) => scriptB(unitPath, scriptA(unitPath, content));
}
