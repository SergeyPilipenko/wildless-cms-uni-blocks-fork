export const roundTo = (value: number | string, precision = 2) => {
  const factor = 10 ** precision;

  return Math.round(parseFloat(String(value)) * factor) / factor;
};
