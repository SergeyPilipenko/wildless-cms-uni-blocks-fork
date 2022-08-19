import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import { isBlockMainFile } from '../utils/isBlockMainFile';
import { withoutExt } from '../utils/withoutExt';

interface Options {
  suffix?: string;
  exclude: RegExp[];
}

export function findBlocks(blocksDir: string, options: Options): string[] {
  const children = readdirSync(blocksDir);
  return children.flatMap(findBlockFiles(blocksDir, options)).map(withoutExt);
}

function findBlockFiles(blocksDir: string, { suffix, exclude }: Options) {
  return (childName: string): string[] => {
    const blockPath = join(blocksDir, childName);

    try {
      const childStat = statSync(blockPath);
      if (!childStat.isDirectory()) {
        return [];
      }

      const blockFiles = readdirSync(blockPath);
      return blockFiles
        .filter((filename) => !exclude.some((_) => _.test(filename)))
        .filter((filename) => isBlockMainFile(join(blockPath, filename), suffix));
    } catch (ex) {
      return [];
    }
  };
}
