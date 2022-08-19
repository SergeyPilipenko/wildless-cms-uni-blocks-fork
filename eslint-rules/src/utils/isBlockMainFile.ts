import { basename } from 'path';
import { getBlockSubDir } from './getBlockSubDir';

export const isBlockMainFile = (filename: string, suffix = '.tsx'): boolean =>
  basename(filename, suffix) === getBlockSubDir(filename);
