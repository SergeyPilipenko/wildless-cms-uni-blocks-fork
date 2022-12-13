export interface TableArrowScrollControlProps {
  activeCardIndex: number;
  onNextClick: () => void;
  onPrevClick: () => void;
  isScrollAvailable?: boolean;
  showNextButton: boolean;
  showPrevButton: boolean;
}
