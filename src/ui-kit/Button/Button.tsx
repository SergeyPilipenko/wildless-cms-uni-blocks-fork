import { JSX } from '@redneckz/uni-jsx';
import { ButtonInner } from './ButtonInner';
import type { ButtonWithIconProps } from './ButtonProps';
import { getRegularButtonClasses } from './getRegularButtonClasses';
import { getDisabledButtonClasses } from './getDisabledButtonClasses';

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
  ({ className = '', ariaLabel, version, rounded, href, target, children, onClick, ...rest }) => {
    return (
      <a
        className={getRegularButtonClasses({ className, version, rounded })}
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
