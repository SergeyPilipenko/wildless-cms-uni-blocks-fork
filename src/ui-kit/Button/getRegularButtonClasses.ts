import type { GetButtonClassParams } from './GetButtonClassParams';
import { buttonStyle, buttonStyleMap } from './buttonClassNameConstants';

export const getRegularButtonClasses = ({
  className,
  rounded,
  version,
}: GetButtonClassParams): string =>
  [
    buttonStyle,
    'border border-transparent inline-block cursor-pointer no-underline focus:border-primary-focus focus:border',
    version ? buttonStyleMap[version] : '',
    rounded ? 'rounded-full' : 'rounded-md',
    className,
  ].join(' ');
