import { JSX } from '@redneckz/uni-jsx';
import type { ButtonVersion } from '../../model/ButtonVersion';
import { ButtonInner } from './ButtonInner';
import type { ButtonProps, ButtonWithIconProps } from './ButtonProps';

const buttonStyleMap: Record<ButtonVersion, string> = {
  primary: 'text-white bg-primary-main hover:bg-primary-hover active:bg-primary-active',
  secondary:
    'text-primary-main bg-secondary-light hover:bg-secondary-hover active:bg-secondary-active',
  link: '',
};

const buttonDisabledStyleMap: Record<ButtonVersion, string> = {
  primary: 'bg-secondary-dark text-secondary-text',
  secondary: 'bg-secondary-light text-secondary-text',
  link: '',
};

const buttonStyle = 'text-center font-sans select-none';

export interface ButtonCommonProps extends ButtonProps, ButtonWithIconProps {}

export const Button = JSX<ButtonCommonProps>((props) => {
  const { text, aboveText, appendLeft, children, disabled, rounded } = props;

  const buttonInner = children ?? (
    <ButtonInner text={text} aboveText={aboveText} appendLeft={appendLeft} rounded={rounded} />
  );

  return disabled ? (
    <DisabledButton {...props}>{buttonInner}</DisabledButton>
  ) : (
    <RegularButton {...props}>{buttonInner}</RegularButton>
  );
});

export const RegularButton = JSX<ButtonCommonProps>(
  ({
    className,
    ariaLabel,
    version = 'none',
    rounded,
    href,
    target,
    children,
    onClick,
    ...rest
  }) => (
    <a
      className={`${buttonStyle} inline-block cursor-pointer no-underline ${
        buttonStyleMap[version] || ''
      } ${rounded ? 'rounded-full' : 'rounded-md'} ${className || ''}`}
      href={href}
      target={target}
      onClick={onClick}
      aria-label={ariaLabel}
      role={href ? 'link' : 'button'}
      {...rest}
    >
      {children}
    </a>
  ),
);

const DisabledButton = JSX<ButtonCommonProps>(
  ({ className, children, ariaLabel, version = 'none', rounded }) => (
    <div
      role="button"
      aria-disabled="true"
      aria-label={ariaLabel}
      tabIndex="-1"
      className={`inline-block ${buttonStyle} ${buttonDisabledStyleMap[version] || ''} ${
        rounded ? 'rounded-full' : 'rounded-md'
      } ${className || ''}`}
    >
      {children}
    </div>
  ),
);
