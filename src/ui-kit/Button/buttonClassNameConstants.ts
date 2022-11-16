import type { ButtonVersion } from '../../model/ButtonVersion';

export const buttonStyleMap: Record<ButtonVersion, string> = {
  primary: 'text-white bg-primary-main hover:bg-primary-hover active:bg-primary-active',
  secondary:
    'text-primary-main bg-main-divider hover:text-white hover:bg-primary-hover active:bg-primary-active',
  white:
    'text-primary-main bg-white hover:text-white hover:bg-primary-hover active:bg-white active:text-primary-main',
  link: '',
};

const DisabledStyle = 'bg-main-divider text-main-disabled';

export const buttonDisabledStyleMap: Record<ButtonVersion, string> = {
  primary: DisabledStyle,
  secondary: DisabledStyle,
  white: DisabledStyle,
  link: '',
};

export const buttonStyle = 'text-center font-sans select-none';

export const iconStyleMap: Record<ButtonVersion, string> = {
  primary: 'group-hover:brightness-0 group-hover:invert',
  secondary: 'group-hover:brightness-0 group-hover:invert',
  white: 'group-hover:brightness-0 group-hover:invert',
  link: '',
};
