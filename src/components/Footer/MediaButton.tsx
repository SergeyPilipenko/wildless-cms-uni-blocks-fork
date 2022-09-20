import { JSX } from '@redneckz/uni-jsx';
import { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import { Img } from '../../ui-kit/Img/Img';

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
  version?: BlockVersion;
}

export const MediaButton = JSX<MediaButtonProps>(({ href, version = 'primary' }) => {
  const { icon, width, height, label } =
    ICONS_MAP.find(({ origins }) => origins.some((_) => href?.includes(_))) || {};

  if (!icon) return null;

  const classes =
    version === 'secondary'
      ? 'bg-secondary-light hover:bg-secondary-hover'
      : 'border-main-divider border-solid border-[1px] hover:bg-primary-main';

  const isPrimary = version === 'primary';

  return (
    <a
      className={`flex items-center justify-center rounded-md w-14 h-14 group box-border ${classes} ${
        isPrimary ? 'hover:text-black' : ''
      }`}
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon ? (
        <Img
          image={{ ...icon, iconVersion: 'normal' }}
          imageClassName={isPrimary ? 'group-hover:text-white' : ''}
          width={width}
          height={height}
          asSVG
        />
      ) : null}
    </a>
  );
});
