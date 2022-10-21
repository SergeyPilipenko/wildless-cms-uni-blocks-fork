import type { ButtonVersion } from '../../model/ButtonVersion';

export const buttonStyleMap: Record<ButtonVersion, string> = {
  primary: 'text-white bg-primary-main hover:bg-primary-hover active:bg-primary-active',
  secondary:
    'text-primary-main bg-main-divider hover:text-white hover:bg-primary-hover active:bg-primary-active',
  link: '',
};

export const buttonDisabledStyleMap: Record<ButtonVersion, string> = {
  primary: 'bg-secondary-dark text-secondary-text',
  secondary: 'bg-secondary-light text-secondary-text',
  link: '',
};

export const buttonStyle = 'text-center font-sans select-none';
