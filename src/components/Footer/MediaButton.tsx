import { JSX } from '@redneckz/uni-jsx';
import { Icon } from '../../ui-kit/Icon/Icon';
import { IconName } from '../../ui-kit/Icon/IconProps';

const ICONS_MAP: Array<{
  origins: string[];
  icon: IconName;
  label: string;
  width: string;
  height: string;
}> = [
  {
    origins: ['t.me', 'telegram.org'],
    icon: 'TelegramIcon',
    label: 'Телеграм',
    width: '20px',
    height: '16px',
  },
  { origins: ['vk.com'], icon: 'VKIcon', label: 'ВКонтакте', width: '24px', height: '12px' },
  { origins: ['ok.ru'], icon: 'OkIcon', label: 'Одноклассники', width: '12px', height: '20px' },
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
      className="flex items-center justify-center border border-solid border-main-divider rounded-full no-underline outline-none w-[38px] h-[38px] hover:fill-primary-main"
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {Icon && <Icon name={icon} width={width} height={height} asSVG className="block" />}
    </a>
  );
});
