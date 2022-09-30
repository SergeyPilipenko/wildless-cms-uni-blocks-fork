import { DEFAULT_SUM } from './constants';

export const getDefaultSum = (minSum?: number, maxSum?: number) =>
  maxSum && minSum ? (maxSum - minSum) / 2 : DEFAULT_SUM;
