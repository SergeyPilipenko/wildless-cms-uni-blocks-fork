import { JSX } from '@redneckz/uni-jsx';
import type { MobileAppTileContent } from './MobileAppTileContent';
import type { UniBlockProps } from '../../types';

import { Logo } from '../../ui-kit/Logo/Logo';

export interface MobileAppTileProps extends MobileAppTileContent, UniBlockProps {}

export const MobileAppTile = JSX<MobileAppTileProps>(
  ({ className, title = 'Мобильное приложение', description, href = '#' }) => {
    return (
      <div
        className={`col-span-12 rounded-md cursor-pointer p-4 mt-6 mb-6 bg-secondary-light ${
          className || ''
        }`}
      >
        {href ? (
          <div className="flex">
            <div className="flex justify-center align-middle rounded-md bg-primary-main w-[50px] h-[50px]">
              <Logo className="w-[33px]" bgColor="transparent" hideTitle />
            </div>
            <a href={href} target="_blank" className="flex flex-col justify-center pl-3">
              <div className="text-m-button font-medium mb-[3px]">{title}</div>
              <div className="text-m-button text-secondary-text">{description}</div>
            </a>
          </div>
        ) : null}
      </div>
    );
  },
);
