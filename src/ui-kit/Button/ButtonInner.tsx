import { JSX } from '@redneckz/uni-jsx';
import { ButtonVersion } from '../../model/ButtonVersion';
import type { ButtonWithIconProps } from './ButtonProps';

interface ButtonInnerProps extends ButtonWithIconProps {
  version?: ButtonVersion;
}

export const ButtonInner = JSX<ButtonInnerProps>(
  ({ text, aboveText, appendLeft, rounded, version }) => {
    const withoutText = !text && !aboveText && Boolean(appendLeft);

    const buttonInnerClasses =
      version !== 'link'
        ? `flex items-center justify-center
          ${withoutText ? 'h-12 w-12' : `px-8 gap-2 ${aboveText ? 'py-2' : 'py-3.5'}`} ${
            rounded ? 'rounded-full' : ''
          }`
        : null;

    return renderButtonInner({ buttonInnerClasses, appendLeft, withoutText, aboveText, text });
  },
);

function renderButtonInner({ buttonInnerClasses, appendLeft, withoutText, aboveText, text }) {
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
}
