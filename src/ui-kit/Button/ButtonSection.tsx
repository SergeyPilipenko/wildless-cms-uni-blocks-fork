import { JSX } from '@redneckz/uni-jsx';
import type { Picture } from '../../model/Picture';
import { Img } from '../Img/Img';
import { Button } from './Button';
import type { ButtonContent, ButtonWithIconProps } from './ButtonProps';

export interface ButtonSectionProps extends ButtonContent {
  className?: string;
}

interface RenderButtonProps {
  button: ButtonWithIconProps;
  buttonClassName?: string;
  index?: number;
}
export const ButtonSection = JSX<ButtonSectionProps>(({ className = '', buttons }) =>
  buttons && buttons?.length ? (
    <div className={className}>
      {buttons.map((button, index) => renderButton({ button, index }))}
    </div>
  ) : null,
);

export function renderButton({ button, buttonClassName, index }: RenderButtonProps) {
  const { icon, iconRight, version, ...rest } = button;

  const iconVersion = version === 'secondary' ? 'color' : 'white';

  const leftIcon = renderButtonIcon({ ...icon, iconVersion: iconVersion } as Picture);
  const rightIcon = renderButtonIcon({ ...iconRight, iconVersion: iconVersion } as Picture);

  return (
    <Button
      key={index ? String(index) : ''}
      className={buttonClassName}
      appendLeft={leftIcon}
      appendRight={rightIcon}
      version={version}
      {...rest}
    />
  );
}

const renderButtonIcon = (icon: Picture) => {
  if (!icon?.icon && !icon?.src) {
    return null;
  }
  const iconWidth = icon?.size?.width ? `${icon.size.width}` : '24';

  return <Img image={{ ...icon }} width={iconWidth} height="24" asSVG />;
};
