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
  const handleNextClick = () => setActiveCardIndex(activeCardIndex + 1);
  const handlePrevClick = () => setActiveCardIndex(activeCardIndex - 1);

  const isScrollAvailable = columnsLength > colsLengthForScroll;
  const showNextButton = isScrollAvailable && columnsLength - activeCardIndex > colsLengthForScroll;
  const showPrevButton = Boolean(isScrollAvailable && activeCardIndex > 0);

  return { handleNextClick, handlePrevClick, isScrollAvailable, showNextButton, showPrevButton };
};
