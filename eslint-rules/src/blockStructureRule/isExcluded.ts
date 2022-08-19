import { basename } from 'path';
import { getBlockSubDir } from '../utils/getBlockSubDir';

export const isExcluded =
  (exclude: RegExp[]) =>
  (filename: string): boolean => {
    const blockSubDir = getBlockSubDir(filename);
    return exclude.some((_) => _.test(blockSubDir) || _.test(basename(filename)));
  };
