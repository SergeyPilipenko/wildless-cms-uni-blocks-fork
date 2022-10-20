// Переназываем свойство в объекте
export function renameProp(obj, oldKey, newKey) {
  delete Object.assign(obj, { [newKey]: obj[oldKey] })[oldKey];
}

// Удаляет пустые свойста и массивы
export function deleteEmptyProps(obj) {
  for (let k in obj) {
    if (!obj[k] || typeof obj[k] !== 'object') {
      continue;
    }
    deleteEmptyProps(obj[k]);
    if (Object.keys(obj[k]).length === 0) {
      delete obj[k];
    }
  }
}
