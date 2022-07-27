import { warn } from 'console';
import fs from 'fs';
import glob from 'glob';
import { dirname, join } from 'path';
import process from 'process';
import { promisify } from 'util';

const MOBILE_SUFFIX = '.mobile';
const FIXTURE_SUFFIX = '.fixture';
const COSMOS_PREFIX = 'cosmos.';

const SUPPORTED_MODULE_EXTS = /\.(js|jsx|ts|tsx|json)$/;

const findFiles = promisify(glob);
const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);
const stat = promisify(fs.stat);

const [, , srcDir, destDir] = process.argv;

(async () => {
  const sources = await findFiles(`${srcDir}/**/*.*`);
  await Promise.all(
    sources
      .filter(
        (_) => ![MOBILE_SUFFIX, FIXTURE_SUFFIX, COSMOS_PREFIX].some((suffix) => _.includes(suffix)),
      )
      .map(copyModule),
  );
})();

async function copyModule(_) {
  try {
    const mobilePath = getMobilePath(_);
    const destPath = join(destDir, _);
    await mkdir(dirname(destPath), { recursive: true });
    await copyFile((await isFileExists(mobilePath)) ? mobilePath : _, destPath);
  } catch (ex) {
    warn(ex);
  }
}

async function isFileExists(_) {
  try {
    return (await stat(_)).isFile();
  } catch (ex) {
    return false;
  }
}

function getMobilePath(_) {
  return _.replace(SUPPORTED_MODULE_EXTS, `${MOBILE_SUFFIX}$&`);
}
