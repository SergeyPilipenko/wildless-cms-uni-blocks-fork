import { getColSpan } from '../../utils/getColSpan';

export function getElementsColsValue(className = '') {
  const colSpan = getColSpan(className);
  if (colSpan <= 6) {
    return 'grid-cols-2';
  } else if (colSpan <= 8) {
    return 'grid-cols-3';
  } else {
    return 'grid-cols-4';
  }
}
