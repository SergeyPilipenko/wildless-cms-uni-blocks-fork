import { JSX } from '@redneckz/uni-jsx';
import { HandlerDecorator, Router } from '../../components/ContentPage/ContentPageContext';
import { useLink } from '../../hooks/useLink';
import type { UniBlockProps } from '../../model/JSXBlock';
import { Button } from './Button';
import type { ButtonContent, ButtonWithIconProps } from './ButtonProps';

export interface ButtonSectionProps extends ButtonContent, UniBlockProps {}

interface ButtonSectionItemProps {
  button: ButtonWithIconProps;
  router: Router;
  handlerDecorator?: HandlerDecorator;
}

export const ButtonSection = JSX<ButtonSectionProps>(({ context, className = '', buttons }) => {
  const { handlerDecorator } = context;
  const router = context.useRouter();

  return buttons && buttons?.length ? (
    <div className={className}>
      {buttons.map((button, index) => (
        <ButtonSectionItem
          button={button}
          handlerDecorator={handlerDecorator}
          key={String(index)}
          router={router}
        />
      ))}
    </div>
  ) : null;
});

const ButtonSectionItem = JSX<ButtonSectionItemProps>(({ router, handlerDecorator, button }) => {
  const buttonProps = useLink({ router, handlerDecorator }, button);

  return <Button {...button} {...buttonProps} />;
});
