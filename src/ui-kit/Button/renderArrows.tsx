import { ArrowButton } from './ArrowButton';
import type { FuncReturnVoid } from '../../types';

type renderArrowsProps = {
  handler: FuncReturnVoid<MouseEvent>[];
  isShown: [boolean, boolean];
  btnClass: [string, string];
  className?: string;
  isDisabled?: boolean;
};

export function renderArrows({
  handler,
  isShown,
  btnClass,
  className = '',
  isDisabled = false,
}: renderArrowsProps) {
  return (
    <div>
      {isShown[0] || isDisabled ? (
        <ArrowButton
          className={`absolute z-10 ${btnClass[0]} ${className}`}
          onClick={handler[0]}
          ariaLabel="Пролистать влево"
          data-block-control="scroll-left"
          disabled={!isShown[0]}
        />
      ) : null}
      {isShown[1] || isDisabled ? (
        <ArrowButton
          className={`absolute z-10 rotate-180 ${btnClass[1]} ${className}`}
          onClick={handler[1]}
          ariaLabel="Пролистать вправо"
          data-block-control="scroll-right"
          disabled={!isShown[1]}
        />
      ) : null}
    </div>
  );
}
