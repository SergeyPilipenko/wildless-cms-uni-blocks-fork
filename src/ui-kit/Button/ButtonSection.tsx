import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import { UniBlockProps } from '../../types';
import { Img } from '../Img/Img';
import { Button } from './Button';
import type { ButtonContent, ButtonWithIconProps } from './ButtonProps';

export interface ButtonSectionProps extends ButtonContent, UniBlockProps {}

export const ButtonSection = JSX<ButtonSectionProps>(({ context, className = '', buttons }) => {
  const { handlerDecorator } = context;
  const router = context.useRouter();

  return buttons && buttons?.length ? (
    <div className={className}>
      {buttons.map((button, index) =>
        renderButton(useLink({ router, handlerDecorator }, button), index),
      )}
    </div>
  ) : null;
});

function renderButton(
  { icon, iconRight, version = 'primary', ...button }: ButtonWithIconProps,
  i: number,
) {
  if (!button?.text) {
    return null;
  }
  const imgStyle = version === 'primary' ? 'group-hover:text-black' : 'group-hover:text-white';
  const iconVersion = version === 'secondary' ? 'normal' : 'white';

  return icon ? (
    <Button
      key={String(i)}
      appendLeft={
        <Img
          imageClassName={imgStyle}
          image={{ ...icon, iconVersion: iconVersion }}
          width="24"
          height="24"
          asSVG
        />
      }
      appendRight={
        <Img
          imageClassName={imgStyle}
          image={{ ...iconRight, iconVersion: iconVersion }}
          width="24"
          height="24"
          asSVG
        />
      }
      version={version}
      {...button}
    />
  ) : (
    <Button key={String(i)} version={version} {...button} />
  );
}
