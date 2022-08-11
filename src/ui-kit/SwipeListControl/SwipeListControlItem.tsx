import { JSX } from '@redneckz/uni-jsx';

/**
 * @title Элемент списка
 */
export interface SwipeListControlItemProps {
  className?: string;
  style?: Record<string, string>;
  'aria-current'?: boolean;
}

export const SwipeListControlItem = JSX<SwipeListControlItemProps>(
  ({ className = '', children, ...rest }) => {
    return (
      <div
        className={`snap-center snap-always min-w-full box-border ${className}`}
        role="listitem"
        {...rest}
      >
        {children}
      </div>
    );
  },
);
