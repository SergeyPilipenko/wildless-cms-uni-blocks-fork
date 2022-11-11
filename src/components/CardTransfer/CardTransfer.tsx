import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import type { UniBlockProps } from '../../model/ContentPageDef';
import type { CardTransferContent } from './CardTransferContent';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { CurrencyInput } from '../../ui-kit/CurrencyInput/CurrencyInput';
import { Heading } from '../../ui-kit/Heading/Heading';
import { getDisabledButtonClasses } from '../../ui-kit/Button/getDisabledButtonClasses';
import { getRegularButtonClasses } from '../../ui-kit/Button/getRegularButtonClasses';
import { useLink } from '../../hooks/useLink';

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
    context,
    ...rest
  }) => {
    const router = context.useRouter();
    const { handlerDecorator } = context;
    const [value, setValue] = useState<string>('');
    const isDisabled = !Number(value);
    const buttonStyle = isDisabled
      ? getDisabledButtonClasses({ version: button?.version })
      : getRegularButtonClasses({ className: 'text-white', version: button?.version });

    return (
      <BlockWrapper
        className={`p-[50px] flex flex-col items-center font-sans bg-white ${className}`}
        context={context}
        {...rest}
      >
        {title ? <Heading className="max-w-[684px] pb-9" headingType="h2" title={title} /> : null}
        <form className="w-[468px]" method="POST" action={FORM_URL}>
          <CurrencyInput
            name={AMOUNT_KEY}
            value={value}
            onChange={setValue}
            placeholder={placeholder}
            label={label}
          />
          {button?.text ? (
            <button
              type="submit"
              className={`w-full p-4 mt-6 ${buttonStyle} `}
              disabled={isDisabled}
              {...useLink({ router, handlerDecorator }, button)}
            >
              {button.text}
            </button>
          ) : null}
        </form>
      </BlockWrapper>
    );
  },
);
