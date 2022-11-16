import { JSX } from '@redneckz/uni-jsx';
import { ButtonInner } from './ButtonInner';
import type { ButtonWithIconProps } from './ButtonProps';
import { getDisabledButtonClasses } from './getDisabledButtonClasses';
import { getRegularButtonClasses } from './getRegularButtonClasses';

export const Button = JSX<ButtonWithIconProps>(
  ({
    aboveText,
    appendLeft,
    appendRight,
    ariaLabel,
    children,
    className,
    disabled,
    href,
    onClick,
    rel,
    rounded,
    target,
    text,
    version,
  }) => {
    const buttonInner = children ?? (
      <ButtonInner
        aboveText={aboveText}
        appendLeft={appendLeft}
        appendRight={appendRight}
        rounded={rounded}
        text={text}
        version={version}
      />
    );

    return disabled ? (
      <DisabledButton
        ariaLabel={ariaLabel}
        className={className}
        rounded={rounded}
        version={version}
      >
        {buttonInner}
      </DisabledButton>
    ) : (
      <RegularButton
        ariaLabel={ariaLabel}
        className={className}
        href={href}
        onClick={onClick}
        rel={rel}
        rounded={rounded}
        target={target}
        version={version}
      >
        {buttonInner}
      </RegularButton>
    );
  },
);

const RegularButton = JSX<ButtonWithIconProps>(
  ({ className = '', ariaLabel, version, rounded, href, target, children, onClick, rel }) => {
    return (
      <a
        className={getRegularButtonClasses({ className, version, rounded })}
        href={href}
        target={target}
        onClick={onClick}
        aria-label={ariaLabel}
        role={href ? 'link' : 'button'}
        rel={rel}
      >
        {children}
      </a>
    );
  },
);

const DisabledButton = JSX<ButtonWithIconProps>(
  ({ className, children, ariaLabel, version, rounded }) => {
    return (
      <div
        role="button"
        aria-disabled="true"
        aria-label={ariaLabel}
        tabIndex={-1}
        className={getDisabledButtonClasses({ className, rounded, version })}
      >
        {children}
      </div>
    );
  },
);
