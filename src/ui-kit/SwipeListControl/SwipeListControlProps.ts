/**
 * @title Контейнер
 */
export interface SwipeContainer {
  /** @title Расстояние между элементами */
  gap?: number;
  /** @title Отступы */
  padding?: number;
}

/**
 * @title Swipe-контроллер
 */
export interface SwipeListControlProps extends SwipeContainer {
  className?: string;
  /** @title Точки-индикаторы */
  showDots?: boolean;
  onSlideChange?: () => void;
}
