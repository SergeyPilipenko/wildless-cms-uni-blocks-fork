import { JSX } from '@redneckz/uni-jsx';
import { ButtonVersion } from '../../model/ButtonVersion';
import type { ButtonWithIconProps } from './ButtonProps';

interface ButtonInnerProps extends ButtonWithIconProps {
  version?: ButtonVersion;
}

export const ButtonInner = JSX<ButtonInnerProps>((props) => {
  const { text, aboveText, appendLeft, appendRight } = props;

  return (
    <div className={getButtonStyle(props)}>
      {appendLeft ? appendLeft : null}
      {isWithText(props) ? (
        <div>
          <div className="text-xs text-left">{aboveText}</div>
          <div className={`text-left ${aboveText ? 'text-s -mt-0.5' : 'text-l'}`}>{text}</div>
        </div>
      ) : null}
      {appendRight ? appendRight : null}
    </div>
  );
});

const getButtonStyle = (props: ButtonInnerProps) => {
  const { version, aboveText, rounded } = props;

  if (version === 'link') {
    return '';
  }

  const withTextStyle = `gap-2 ${aboveText ? 'py-2.5 px-7' : 'py-4 px-9'}`;

  return [
    'flex items-center justify-center',
    isWithText(props) ? withTextStyle : 'h-12 w-12',
    rounded ? 'rounded-full' : '',
  ].join(' ');
};

const isWithText = ({ text, aboveText, appendLeft }: ButtonInnerProps) =>
  Boolean(text || aboveText || !appendLeft);
