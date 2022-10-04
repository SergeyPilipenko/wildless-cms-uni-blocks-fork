import { getColSpan } from '../../utils/getColSpan';

export function getTileHeadingType(className = '') {
  const colSpan = getColSpan(className);
  if (colSpan <= 4) {
    return 'S';
  } else if (colSpan <= 8) {
    return 'M';
  } else {
    return 'L';
  }
}
