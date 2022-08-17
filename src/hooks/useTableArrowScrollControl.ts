import type { TableArrowScrollControlProps } from '../ui-kit/TableArrowScrollControl/TableArrowScrollControlProps';

export const useTableArrowScrollControl = ({
  columnsLength,
  colsLengthForScroll,
  activeCardIndex,
  setActiveCardIndex,
}: {
  columnsLength: number;
  colsLengthForScroll: number;
  activeCardIndex: number;
  setActiveCardIndex: (_: number) => void;
}): Required<TableArrowScrollControlProps> => {
  const onNextClick = () => setActiveCardIndex(activeCardIndex + 1);
  const onPrevClick = () => setActiveCardIndex(activeCardIndex - 1);

  const isScrollAvailable = columnsLength > colsLengthForScroll;
  const showNextButton = isScrollAvailable && columnsLength - activeCardIndex > colsLengthForScroll;
  const showPrevButton = Boolean(isScrollAvailable && activeCardIndex > 0);

  return { onNextClick, onPrevClick, isScrollAvailable, showNextButton, showPrevButton };
};
