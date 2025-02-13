import { JSX } from '@redneckz/uni-jsx';
import type { BaseTileCommonProps } from './BaseTileProps';

export interface BaseTileProps extends BaseTileCommonProps {
  className?: string;
}

export const BaseTile = JSX<BaseTileProps>(
  ({ className = '', title = '', buttons, image, children }) => (
    <div className={`font-sans flex flex-col grow h-full items-start ${className}`}>
      {title}
      <div className="flex grow w-full justify-between">
        <div className="flex flex-col justify-between w-full">
          <div className="h-full">{children}</div>
          {buttons ? <div className="mt-auto pt-8">{buttons}</div> : null}
        </div>
        {image}
      </div>
    </div>
  ),
);
