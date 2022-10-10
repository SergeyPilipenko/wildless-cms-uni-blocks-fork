/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */

import { JSX } from '@redneckz/uni-jsx';
import type { ButtonVersion } from '../../model/ButtonVersion';
import { ButtonInner } from './ButtonInner';
import type { ButtonProps, ButtonWithIconProps } from './ButtonProps';

const buttonStyleMap: Record<ButtonVersion, string> = {
  primary: 'text-white bg-primary-main hover:bg-primary-hover active:bg-primary-active',
  secondary:
    'text-primary-main bg-main-divider hover:text-white hover:bg-primary-hover active:bg-primary-active',
  link: 'text-primary-main',
};

const buttonDisabledStyleMap: Record<ButtonVersion, string> = {
  primary: 'bg-secondary-dark text-secondary-text',
  secondary: 'bg-secondary-light text-secondary-text',
  link: '',
};

const styleButton = 'w-full text-center font-sans select-none';

export interface ButtonCommonProps extends ButtonProps, ButtonWithIconProps {}

export const Button = JSX<ButtonCommonProps>(
  ({
    className,
    text,
    aboveText,
    appendLeft,
    href,
    target,
    onClick,
    children,
    disabled,
    rounded,
    version = 'primary',
    ariaLabel,
    ...rest
  }) => {
    const buttonInner = children ?? (
      <ButtonInner
        text={text}
        aboveText={aboveText}
        appendLeft={appendLeft}
        rounded={rounded}
        version={version}
      />
    );

    if (disabled) {
      return (
        <div
          role="button"
          aria-disabled="true"
          aria-label={ariaLabel}
          tabIndex={-1}
          className={`inline-block ${styleButton} ${buttonDisabledStyleMap[version] || ''} ${
            rounded ? 'rounded-full' : 'rounded-md'
          } ${className || ''}`}
        >
          {buttonInner}
        </div>
      );
    }

    return (
      <a
        className={`${styleButton} inline-block cursor-pointer no-underline focus:border focus:border-primary-focus ${
          buttonStyleMap[version] || ''
        } ${rounded ? 'rounded-full' : 'rounded-md'} ${className || ''}`}
        href={href}
        target={target}
        onClick={onClick}
        aria-label={ariaLabel}
        role={!href ? 'button' : 'link'}
        {...rest}
      >
        {buttonInner}
      </a>
    );
  },
);
