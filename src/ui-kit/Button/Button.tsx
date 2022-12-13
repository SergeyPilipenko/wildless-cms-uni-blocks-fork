import { JSX } from '@redneckz/uni-jsx';
import { useLink } from '../../hooks/useLink';
import { ButtonInner } from './ButtonInner';
import type { ButtonWithIconProps } from './ButtonProps';
import { getDisabledButtonClasses } from './getDisabledButtonClasses';
import { getRegularButtonClasses } from './getRegularButtonClasses';

export const Button = JSX<ButtonWithIconProps>(({ disabled, children, ...rest }) => {
  const link = useLink();
  const adjustedProps = link(rest);
  const buttonInner = children ?? <ButtonInner {...adjustedProps} />;

  return disabled ? (
    <DisabledButton {...adjustedProps}>{buttonInner}</DisabledButton>
  ) : (
    <RegularButton {...adjustedProps}>{buttonInner}</RegularButton>
  );
});

const RegularButton = JSX<ButtonWithIconProps>(
  ({ className = '', href, rel, target, ariaLabel, version, rounded, onClick, children }) => (
    <a
      className={getRegularButtonClasses({ className, version, rounded })}
      href={href}
      rel={rel}
      target={target}
      aria-label={ariaLabel}
      role={href ? 'link' : 'button'}
      onClick={onClick}
    >
      {children}
    </a>
  ),
);

const DisabledButton = JSX<ButtonWithIconProps>(
  ({ className, ariaLabel, version, rounded, children }) => (
    <div
      role="button"
      aria-disabled="true"
      aria-label={ariaLabel}
      tabIndex={-1}
      className={getDisabledButtonClasses({ className, rounded, version })}
    >
      {children}
    </div>
  ),
);
