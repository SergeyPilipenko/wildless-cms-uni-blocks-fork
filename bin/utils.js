export function renameProp(obj, oldKey, newKey) {
  if (oldKey in obj) {
    obj[newKey] = obj[oldKey];
    Reflect.deleteProperty(obj, oldKey);
  }

  return obj;
}
module.exports = renameProp;

export function deleteEmptyProps(obj) {
  const isObj = (_) => _ && typeof _ === 'object';
  const isEmpty = (_) => _ === null || _ === undefined || (isObj(_) && !Object.keys(_).length);

  const emptyProps = Object.keys(obj).filter((key) => isEmpty(obj[key]));
  for (const key in emptyProps) {
    Reflect.deleteProperty(obj, key);
  }

  Object.values(obj).filter(isObj).forEach(deleteEmptyProps);

  return obj;
}
module.exports = deleteEmptyProps;
