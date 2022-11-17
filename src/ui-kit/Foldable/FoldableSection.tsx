import { JSX } from '@redneckz/uni-jsx';
import { useEffect, useRef } from '@redneckz/uni-jsx/lib/hooks';

export interface FoldableSectionProps {
  className?: string;
  isUnfolded?: boolean;
}

export const FoldableSection = JSX<FoldableSectionProps>(
  ({ className = '', isUnfolded, children }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.style.maxHeight = isUnfolded
          ? `${containerRef.current.scrollHeight}px`
          : '';
      }
    }, [isUnfolded]);

    return (
      <div
        ref={containerRef}
        className={`transition-max-h duration-300 overflow-hidden max-h-0 ${className}`}
      >
        {children}
      </div>
    );
  },
);
