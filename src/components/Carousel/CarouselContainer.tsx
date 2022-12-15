import { JSX } from '@redneckz/uni-jsx';

export interface CarouselContainerProps {
  activeItem: number;
  cardFullViewCount: number;
  cardWidth: number;
}

export const CarouselContainer = JSX<CarouselContainerProps>(
  ({ children, activeItem, cardFullViewCount, cardWidth }) => {
    const cardFullViewStyles =
      cardFullViewCount === 1
        ? `translateX(-${activeItem}00%)`
        : `translateX(-${activeItem * cardWidth}px)`;

    return (
      <div
        className="w-auto flex flex-1 duration-1000"
        style={{ transform: `${cardFullViewStyles}` }}
        role="list"
      >
        {children}
      </div>
    );
  },
);
