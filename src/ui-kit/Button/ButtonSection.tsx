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

  return buttons?.length ? (
    <div className={className}>
      {buttons.map((button, index) =>
        renderButton(useLink({ router, handlerDecorator }, button), index),
      )}
    </div>
  ) : null;
});

function renderButton({ icon, ...button }: ButtonWithIconProps, i: number) {
  if (!button?.text) {
    return;
  }

  return icon ? (
    <Button
      key={String(i)}
      appendLeft={<Img image={icon} width="24" height="24" asSVG />}
      {...button}
    />
  ) : (
    <Button key={String(i)} {...button} />
  );
}
