import { FuncReturnVoid } from '../../types';

export interface TableArrowScrollControlProps {
  isScrollAvailable?: boolean;
  handleNextClick: FuncReturnVoid<MouseEvent>;
  handlePrevClick: FuncReturnVoid<MouseEvent>;
  showNextButton: boolean;
  showPrevButton: boolean;
}
