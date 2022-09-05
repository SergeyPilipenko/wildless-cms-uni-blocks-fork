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
  {
    origins: ['apps.apple.com'],
    icon: { icon: 'AppleIcon' },
    label: 'App Store',
    width: '20px',
    height: '22px',
  },
  {
    origins: ['play.google.com'],
    icon: { icon: 'PlayMarketIcon' },
    label: 'Google Play',
    width: '21px',
    height: '21px',
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
      className="flex items-center justify-center border border-solid rounded-md border-main-divider no-underline outline-none w-14 h-14 box-border text-primary-main hover:text-white hover:bg-primary-main hover:border-primary-main"
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
