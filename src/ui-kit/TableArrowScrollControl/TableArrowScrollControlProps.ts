export interface TableArrowScrollControlProps {
  isScrollAvailable?: boolean;
  onNextClick?: (ev?: MouseEvent) => void;
  onPrevClick?: (ev?: MouseEvent) => void;
  showNextButton?: boolean;
  showPrevButton?: boolean;
}
