import { useCallback, useState } from '@redneckz/uni-jsx/lib/hooks';

export type CarouselControlProps = [number, Controls];

export interface Controls {
  inc: () => void;
  dec: () => void;
  canInc: boolean;
  canDec: boolean;
}

interface CarouselProps {
  itemsCount: number;
  visibleItemCount?: number;
  isCyclic?: boolean;
}

export const useCarouselControl = ({
  itemsCount,
  visibleItemCount = itemsCount,
  isCyclic,
}: CarouselProps): Required<CarouselControlProps> => {
  const [activeIndex, setActiveIndex] = useState(0);

  const inc = useCallback(
    () =>
      setActiveIndex((_) => (isCyclic ? (_ + 1) % itemsCount : Math.min(_ + 1, itemsCount - 1))),
    [],
  );

  const dec = useCallback(
    () =>
      setActiveIndex((_) => (isCyclic ? (itemsCount + _ - 1) % itemsCount : Math.max(_ - 1, 0))),
    [],
  );

  const isScrollAvailable = itemsCount > visibleItemCount;
  const isCyclicAndScrollAvailable = isCyclic && isScrollAvailable;

  const canInc =
    isCyclicAndScrollAvailable ||
    (isScrollAvailable && itemsCount - activeIndex > visibleItemCount);

  const canDec = isCyclicAndScrollAvailable || Boolean(isScrollAvailable && activeIndex > 0);

  return [
    activeIndex,
    {
      inc,
      dec,
      canInc,
      canDec,
    },
  ];
};
