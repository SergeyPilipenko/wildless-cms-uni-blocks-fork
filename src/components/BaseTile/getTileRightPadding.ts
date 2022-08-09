import { getColSpan } from '../../utils/getColSpan';

export function getTileRightPadding(className = '') {
  const colSpan = getColSpan(className);
  if (colSpan <= 6) {
    return 'pr-9';
  } else if (colSpan <= 8) {
    return 'pr-[4.75rem]';
  } else {
    return 'pr-[9.4rem]';
  }
}
