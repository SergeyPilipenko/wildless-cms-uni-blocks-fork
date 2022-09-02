import { JSX } from '@redneckz/uni-jsx';
import { Img } from '../../ui-kit/Img/Img';
import type { Picture } from '../../model/Picture';

const ICONS_MAP: Array<{
  origins: string[];
  icon: Picture;
  label: string;
  width: string;
  height: string;
}> = [
  {
    origins: ['t.me', 'telegram.org'],
    icon: { icon: 'TelegramIcon' },
    label: 'Телеграм',
    width: '20px',
    height: '16px',
  },
  {
    origins: ['vk.com'],
    icon: { icon: 'VKIcon' },
    label: 'ВКонтакте',
    width: '24px',
    height: '12px',
  },
  {
    origins: ['ok.ru'],
    icon: { icon: 'OkIcon' },
    label: 'Одноклассники',
    width: '12px',
    height: '20px',
  },
];

interface MediaButtonProps {
  href?: string;
}

export const MediaButton = JSX<MediaButtonProps>(({ href }) => {
  const { icon, width, height, label } =
    ICONS_MAP.find(({ origins }) => origins.some((_) => href?.includes(_))) || {};

  if (!icon) return null;

  return (
    <a
      className="flex items-center justify-center border border-solid border-main-divider rounded-full no-underline outline-none w-[40px] h-[40px] box-border hover:text-primary-main"
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon ? (
        <Img image={icon} width={width} height={height} asSVG className="block" color="none" />
      ) : null}
    </a>
  );
});
