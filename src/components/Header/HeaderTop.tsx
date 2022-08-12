import { JSX } from '@redneckz/uni-jsx';
import type { BgColorVersion } from '../../model/BgColorVersion';
import { Icon } from '../../ui-kit/Icon/Icon';
import { Logo } from '../../ui-kit/Logo/Logo';

export interface HeaderTopProps {
  onClick: () => void;
  bgColor?: BgColorVersion;
}

export const HeaderTop = JSX<HeaderTopProps>(({ onClick, bgColor }) => (
  <div className="flex items-center justify-between border-0 border-b border-main-divider h-[50px]">
    <div className="flex items-center">
      <button className="pr-4 border-0 bg-transparent cursor-pointer" onClick={onClick} aria-label="Открыть меню">
        <Icon
          name={bgColor === 'bg-white' ? 'BurgerIcon' : 'BurgerIconWhite'}
          width="24"
          height="24"
          asSVG
        />
      </button>
      <Logo bgColor={bgColor} />
    </div>
    <button
      className={`${
        bgColor === 'bg-white' ? 'text-primary-main' : 'text-white'
      } text-sm  border-0 bg-transparent cursor-pointer`}
    >
      Войти
    </button>
  </div>
));
