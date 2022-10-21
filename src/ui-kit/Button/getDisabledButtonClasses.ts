import type { GetButtonClassParams } from './GetButtonClassParams';
import { buttonDisabledStyleMap, buttonStyle } from './buttonClassNameConstants';

export const getDisabledButtonClasses = ({
  className,
  rounded,
  version,
}: GetButtonClassParams): string =>
  [
    'inline-block',
    buttonStyle,
    version ? buttonDisabledStyleMap[version] : '',
    rounded ? 'rounded-full' : 'rounded-md',
    className,
  ].join(' ');
