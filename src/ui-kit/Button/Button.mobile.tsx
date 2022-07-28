/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */

import { JSX } from '@redneckz/uni-jsx';
import type { ButtonVersion } from '../../model/ButtonVersion';
import type { ButtonProps, ButtonWithIconProps } from './ButtonProps';

const buttonStyleMap: Record<ButtonVersion, string> = {
  primary: 'text-white bg-primary-main hover:bg-primary-hover active:bg-primary-active',
  secondary:
    'text-primary-main bg-secondary-light hover:bg-secondary-hover active:bg-secondary-active',
};

const buttonDisabledStyleMap: Record<ButtonVersion, string> = {
  primary: 'bg-secondary-dark text-secondary-text',
  secondary: 'bg-secondary-light text-secondary-text',
};

const styleButton = 'w-full text-center font-sans select-none';

export interface ButtonCommonProps extends ButtonProps, ButtonWithIconProps {}

export type ButtonInner = Pick<ButtonCommonProps, 'text' | 'aboveText' | 'appendLeft' | 'rounded'>;

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
    version = 'none',
    ariaLabel,
    ...rest
  }) => {
    const buttonInner = children ?? (
      <ButtonInner text={text} aboveText={aboveText} appendLeft={appendLeft} rounded={rounded} />
    );

    if (disabled) {
      return (
        <div
          role="button"
          aria-disabled="true"
          aria-label={ariaLabel}
          tabIndex="-1"
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
        className={`${styleButton} inline-block cursor-pointer no-underline ${
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

export const ButtonInner = JSX<ButtonInner>(({ text, aboveText, appendLeft, rounded }) => {
  const withoutText = !text && !aboveText && Boolean(appendLeft);

  const buttonInnerClasses = `flex items-center justify-center ${
    withoutText ? 'h-12 w-12' : `px-9 gap-2 ${aboveText ? 'py-2' : 'py-3.5'}`
  } ${rounded ? 'rounded-full' : ''}`;

  return (
    <div className={buttonInnerClasses}>
      {appendLeft ? appendLeft : null}
      {withoutText ? null : (
        <div>
          <div className="text-m-2xs text-left">{aboveText}</div>
          <div className="text-m-button font-medium text-left">{text}</div>
        </div>
      )}
    </div>
  );
});
