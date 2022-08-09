import { getColSpan } from '../../utils/getColSpan';

export function getTileMinHeight(className = '') {
  const colSpan = getColSpan(className);
  if (colSpan <= 6) {
    return 'min-h-[300px]';
  } else if (colSpan <= 8) {
    return 'min-h-[320px]';
  } else {
    return 'min-h-[360px]';
  }
}
