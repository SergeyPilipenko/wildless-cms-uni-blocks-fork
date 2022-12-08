import type { Picture } from '../model/Picture';
import type { BlockVersion } from '../model/BlockVersion';

export const getIconWithVersion = (icon: Picture, version: BlockVersion = 'primary'): Picture => ({
  ...icon,
  iconVersion: icon?.iconVersion ?? (version === 'secondary' ? 'white' : 'color'),
});
