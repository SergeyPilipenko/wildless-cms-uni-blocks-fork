import { JSX } from '@redneckz/uni-jsx';
import { useState } from '@redneckz/uni-jsx/lib/hooks';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { CurrencyInput } from '../../ui-kit/CurrencyInput/CurrencyInput';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { UniBlockProps } from '../../types';
import type { GetButtonClassParams } from '../../ui-kit/Button/GetButtonClassParams';
import type { CardTransferContent } from './CardTransferContent';
import { getRegularButtonClasses } from '../../ui-kit/Button/getRegularButtonClasses';
import { getDisabledButtonClasses } from '../../ui-kit/Button/getDisabledButtonClasses';

const AMOUNT_KEY = 'amount';
const INPUT_LABEL = 'Сумма перевода';
const BUTTON_TEXT = 'Далее';
const PLACEHOLDER = '1500';
const TITLE = 'Укажите сумму перевода';

const FORM_URL = 'https://www.rshb.ru/p2p/';

const BUTTON_CLASS_PARAMS: GetButtonClassParams = {
  version: 'primary',
  className: 'w-full h-[56px] px-9 mt-6',
};

export interface CardTransferProps extends CardTransferContent, UniBlockProps {}

export const CardTransfer = JSX<CardTransferProps>(({ className = '', title = TITLE, ...rest }) => {
  const [value, setValue] = useState<string>('');
  const isDisabled = !Number(value);

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
          placeholder={PLACEHOLDER}
          label={INPUT_LABEL}
        />
        <button
          type="submit"
          className={
            isDisabled
              ? getDisabledButtonClasses(BUTTON_CLASS_PARAMS)
              : getRegularButtonClasses(BUTTON_CLASS_PARAMS)
          }
          disabled={isDisabled}
        >
          {BUTTON_TEXT}
        </button>
      </form>
    </BlockWrapper>
  );
});
