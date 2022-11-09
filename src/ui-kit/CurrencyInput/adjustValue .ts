export const adjustValue = (val: string) => onlyOneDot(setZeroStart(replaceCommaToDot(val)));

const onlyOneDot = (val: string): string => {
  const matches = val.match(/\./g) || [];

  return matches.length > 1 ? val.slice(0, val.lastIndexOf('.')) : val;
};

const setZeroStart = (val: string): string => {
  const isZeroStart = val.indexOf('0') === 0 && val.length === 2;
  const newVal = isZeroStart ? val.replace('0', '0.') : val;

  return newVal.startsWith('.') ? newVal.replace('.', '0.') : newVal;
};

const replaceCommaToDot = (val: string): string =>
  String(val.replace(',', '.').replace(/[^.\d]/g, ''));
