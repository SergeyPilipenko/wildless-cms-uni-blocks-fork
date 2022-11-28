import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import type { IconVersion } from '../../model/IconVersion';
import type { UniBlockProps } from '../../model/JSXBlock';
import type { Picture } from '../../model/Picture';
import { Img } from '../Img/Img';
import { Button } from './Button';
import type { ButtonContent, ButtonWithIconProps } from './ButtonProps';

export interface ButtonSectionProps extends ButtonContent, UniBlockProps {}

interface RenderButtonProps {
  button: ButtonWithIconProps;
  buttonClassName?: string;
  index?: number;
}

interface RenderButtonIconProps {
  icon?: Picture;
  iconVersion?: IconVersion;
}

export const ButtonSection = JSX<ButtonSectionProps>(({ context, className = '', buttons }) => {
  const { handlerDecorator } = context;
  const router = context.useRouter();

  return buttons && buttons?.length ? (
    <div className={className}>
      {buttons.map((button, index) =>
        renderButton({ button: useLink({ router, handlerDecorator }, button), index }),
      )}
    </div>
  ) : null;
});

export function renderButton({ button, buttonClassName, index }: RenderButtonProps) {
  const { icon, iconRight, version, ...rest } = button;

  const iconVersion = version === 'secondary' ? 'normal' : 'white';

  const leftIcon = renderButtonIcon({ icon, iconVersion });
  const rightIcon = renderButtonIcon({ icon: iconRight, iconVersion });

  return (
    <Button
      className={buttonClassName}
      appendLeft={leftIcon}
      appendRight={rightIcon}
      version={version}
      key={index ? String(index) : ''}
      {...rest}
    />
  );
}

const renderButtonIcon = ({ icon, iconVersion }: RenderButtonIconProps) => {
  if (!icon?.icon && !icon?.src) {
    return null;
  }
  const iconWidth = icon?.size?.width ? `${icon.size.width}` : '24';

  return <Img image={{ ...icon, iconVersion: iconVersion }} width={iconWidth} height="24" asSVG />;
};
