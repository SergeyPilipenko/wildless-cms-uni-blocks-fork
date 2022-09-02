import { JSX } from '@redneckz/uni-jsx';
import { ButtonVersion } from '../../model/ButtonVersion';
import type { ButtonWithIconProps } from './ButtonProps';

interface ButtonInnerProps extends ButtonWithIconProps {
  version?: ButtonVersion;
}

export const ButtonInner = JSX<ButtonInnerProps>((props) => {
  const { text, aboveText, appendLeft } = props;
  return (
    <div className={getButtonStyle(props)}>
      {appendLeft ? appendLeft : null}
      {isWithText(props) ? (
        <div>
          <div className="text-m-2xs font-light text-left">{aboveText}</div>
          <div className="text-base text-left">{text}</div>
        </div>
      ) : null}
    </div>
  );
});

const getButtonStyle = (props: ButtonInnerProps) => {
  const { version, aboveText, rounded } = props;

  if (version === 'link') {
    return '';
  }

  const withTextStyle = `px-8 gap-2 ${aboveText ? 'py-2' : 'py-4'}`;

  return [
    'flex items-center justify-center',
    isWithText(props) ? withTextStyle : 'h-12 w-12',
    rounded ? 'rounded-full' : '',
  ].join(' ');
};

const isWithText = ({ text, aboveText, appendLeft }: ButtonInnerProps) =>
  Boolean(text || aboveText || !appendLeft);
