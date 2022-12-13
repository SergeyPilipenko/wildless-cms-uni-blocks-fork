import { useCallback, useState } from '@redneckz/uni-jsx/lib/hooks';
import type { TableArrowScrollControlProps } from '../ui-kit/TableArrowScrollControl/TableArrowScrollControlProps';

export const useTableArrowScrollControl = ({
  columnsLength,
  colsLengthForScroll,
}: {
  columnsLength: number;
  colsLengthForScroll: number;
}): Required<TableArrowScrollControlProps> => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const onNextClick = useCallback(() => setActiveCardIndex((_) => _ + 1), []);
  const onPrevClick = useCallback(() => setActiveCardIndex((_) => _ - 1), []);

  const isScrollAvailable = columnsLength > colsLengthForScroll;
  const showNextButton = isScrollAvailable && columnsLength - activeCardIndex > colsLengthForScroll;
  const showPrevButton = Boolean(isScrollAvailable && activeCardIndex > 0);

  return {
    activeCardIndex,
    onNextClick,
    onPrevClick,
    isScrollAvailable,
    showNextButton,
    showPrevButton,
  };
};
