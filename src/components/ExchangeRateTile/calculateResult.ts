import { roundTo } from '../../utils/roundTo';

export const calculateResult = (value: string, rate: number, precision: boolean) => {
  const result = Number(formatValue(value)) * Math.pow(rate, precision ? -1 : 1);

  return Number.isInteger(result) ? result : roundTo(result);
};

export const formatValue = (value: string) => value.replace(/[^\d.,]/g, '').replace(',', '.');
