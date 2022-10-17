import { JSX } from '@redneckz/uni-jsx';
import type { ButtonVersion } from '../../model/ButtonVersion';
import { ButtonInner } from './ButtonInner';
import type { ButtonWithIconProps } from './ButtonProps';

const buttonStyleMap: Record<ButtonVersion, string> = {
  primary: 'text-white bg-primary-main hover:bg-primary-hover active:bg-primary-active',
  secondary:
    'text-primary-main bg-main-divider hover:text-white hover:bg-primary-hover active:bg-primary-active',
  link: '',
};

const buttonDisabledStyleMap: Record<ButtonVersion, string> = {
  primary: 'bg-secondary-dark text-secondary-text',
  secondary: 'bg-secondary-light text-secondary-text',
  link: '',
};

const buttonStyle = 'text-center font-sans select-none';

export const Button = JSX<ButtonWithIconProps>((props) => {
  const { text, aboveText, appendLeft, appendRight, children, disabled, rounded, ...rest } = props;

  const buttonInner = children ?? (
    <ButtonInner
      text={text}
      aboveText={aboveText}
      appendLeft={appendLeft}
      appendRight={appendRight}
      rounded={rounded}
    />
  );

  return disabled ? (
    <DisabledButton rounded={rounded} {...rest}>
      {buttonInner}
    </DisabledButton>
  ) : (
    <RegularButton rounded={rounded} {...rest}>
      {buttonInner}
    </RegularButton>
  );
});

const RegularButton = JSX<ButtonWithIconProps>(
  ({
    className = '',
    ariaLabel,
    version = 'none',
    rounded,
    href,
    target,
    children,
    onClick,
    ...rest
  }) => {
    return (
      <a
        className={`${buttonStyle} border border-transparent inline-block cursor-pointer no-underline focus:border-primary-focus focus:border ${
          buttonStyleMap[version] || ''
        } ${rounded ? 'rounded-full' : 'rounded-md'} ${className}`}
        href={href}
        target={target}
        onClick={onClick}
        aria-label={ariaLabel}
        role={href ? 'link' : 'button'}
        {...rest}
      >
        {children}
      </a>
    );
  },
);

const DisabledButton = JSX<ButtonWithIconProps>(
  ({ className, children, ariaLabel, version = 'none', rounded }) => {
    return (
      <div
        role="button"
        aria-disabled="true"
        aria-label={ariaLabel}
        tabIndex={-1}
        className={`inline-block ${buttonStyle} ${buttonDisabledStyleMap[version] || ''} ${
          rounded ? 'rounded-full' : 'rounded-md'
        } ${className || ''}`}
      >
        {children}
      </div>
    );
  },
);
