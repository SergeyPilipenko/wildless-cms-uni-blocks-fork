/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */

import { JSX } from '@redneckz/uni-jsx';
import type { ButtonVersion } from '../../model/ButtonVersion';
import { ButtonInner } from './ButtonInner';
import type { ButtonWithIconProps } from './ButtonProps';

const buttonStyleMap: Record<ButtonVersion, string> = {
  primary: 'text-white bg-primary-main hover:bg-primary-hover active:bg-primary-active',
  secondary:
    'text-primary-main bg-main-divider hover:text-white hover:bg-primary-hover active:bg-primary-active',
  white: 'text-primary-main bg-white hover:text-white hover:bg-primary-hover active:bg-white',
  link: 'text-primary-main',
};

const buttonDisabledStyleMap: Record<ButtonVersion, string> = {
  primary: 'bg-secondary-dark text-secondary-text',
  secondary: 'bg-secondary-light text-secondary-text',
  white: 'bg-white text-primary-text',
  link: '',
};

const styleButton = 'w-full text-center font-sans select-none';

export const Button = JSX<ButtonWithIconProps>(
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
    // It isn't a valid HTML attribute. Must be excluded from "rest"
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { asSVG, iconRight, appendRight, icon, ...buttonInnerRest } = rest;
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
        {...buttonInnerRest}
      >
        {buttonInner}
      </a>
    );
  },
);
