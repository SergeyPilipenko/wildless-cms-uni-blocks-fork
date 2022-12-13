import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import { useLink } from '../../hooks/useLink';
import type { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { getDisabledButtonClasses } from '../../ui-kit/Button/getDisabledButtonClasses';
import { getRegularButtonClasses } from '../../ui-kit/Button/getRegularButtonClasses';
import { CurrencyInput } from '../../ui-kit/CurrencyInput/CurrencyInput';
import { Heading } from '../../ui-kit/Heading/Heading';
import { getSanitizedValue } from '../../utils/getSanitizedValue';
import type { CardTransferContent } from './CardTransferContent';

const AMOUNT_KEY = 'amount';
const FORM_URL = 'https://www.rshb.ru/p2p/';
const DEFAULT_TITLE = 'Укажите сумму перевода';
const DEFAULT_LABEL = 'Сумма перевода';
const DEFAULT_PLACEHOLDER = '1500';

export interface CardTransferProps extends CardTransferContent, UniBlockProps {}

export const CardTransfer = JSX<CardTransferProps>(
  ({
    className = '',
    title = DEFAULT_TITLE,
    label = DEFAULT_LABEL,
    placeholder = DEFAULT_PLACEHOLDER,
    button,
    ...rest
  }) => {
    const [value, setValue] = useState<string>('');
    const isDisabled = !Number(getSanitizedValue(value));
    const buttonStyle = isDisabled
      ? getDisabledButtonClasses({ version: button?.version })
      : getRegularButtonClasses({ className: 'text-white', version: button?.version });

    const link = useLink();

    return (
      <BlockWrapper
        className={`p-[50px] flex flex-col items-center font-sans bg-white ${className}`}
        {...rest}
      >
        {title ? <Heading className="max-w-[684px] pb-9" headingType="h2" title={title} /> : null}
        <form className="w-[468px]" method="POST" action={FORM_URL}>
          <CurrencyInput
            name={AMOUNT_KEY}
            value={value}
            onChange={setValue}
            valid={value === '' || !isDisabled}
            placeholder={placeholder}
            label={label}
          />
          {button?.text ? (
            <button
              type="submit"
              className={`w-full p-4 mt-6 ${buttonStyle} `}
              disabled={isDisabled}
              {...link(button)}
            >
              {button.text}
            </button>
          ) : null}
        </form>
      </BlockWrapper>
    );
  },
);
