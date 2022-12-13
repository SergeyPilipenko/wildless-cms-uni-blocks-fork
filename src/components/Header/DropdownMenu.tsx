import { JSX } from '@redneckz/uni-jsx';
import { useCallback, useState } from '@redneckz/uni-jsx/lib/hooks';
import { useLink } from '../../hooks/useLink';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import type { BgColorVersion } from '../../model/BgColorVersion';
import type { LinkProps } from '../../model/LinkProps';

const DOT_BG_COLORS_MAP: Record<BgColorVersion, string> = {
  'bg-white': 'bg-primary-text',
  transparent: 'bg-white',
};

interface DropdownMenuProps {
  className?: string;
  items: LinkProps[];
  activeItem?: LinkProps;
  bgColor?: BgColorVersion;
}

export const DropdownMenu = JSX<DropdownMenuProps>(({ className, items, activeItem, bgColor }) => {
  const link = useLink();

  const [visible, setVisible] = useState(false);
  const handleToggle = useCallback(() => setVisible((_) => !_), []);

  const handleClickOutside = useCallback(() => setVisible(false), []);
  const ref = useOutsideClick<HTMLDivElement>(handleClickOutside);

  return (
    <div
      className={`${visible ? 'bg-white rounded-md shadow-blue-gray/24' : ''} ${className || ''}`}
      ref={ref}
    >
      <button
        className="flex justify-between items-center cursor-pointer h-6 ml-6"
        aria-label={`${visible ? 'Скрыть другие разделы' : 'Показать другие разделы'}`}
        onClick={handleToggle}
      >
        {Array(3).fill(bgColor).map(renderDot)}
      </button>
      <div
        className={`flex flex-col rounded-md bg-white p-6 pb-2 ${visible ? '' : 'hidden'}`}
        aria-hidden={!visible}
      >
        {items?.map((item, i) => (
          <a
            key={item.href || String(i)}
            className={`text-l-light pb-4 hover:text-primary-main ${
              item === activeItem ? 'text-primary-main' : ''
            }`}
            {...link(item)}
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
});

const renderDot = (bgColor: BgColorVersion, i: number) => (
  <div key={String(i)} className={`w-[3px] h-[3px] rounded mr-1 ${DOT_BG_COLORS_MAP[bgColor]}`} />
);
