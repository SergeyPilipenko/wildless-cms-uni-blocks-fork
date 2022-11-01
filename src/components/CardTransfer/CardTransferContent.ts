import type { LabelProps, TitleProps } from '../../model/HeadlineType';

/**
 * @title Перевод с карты на карту
 */
export type CardTransferContent = LabelProps &
  TitleProps & {
    /** @title Плейсхолдер */
    placeholder?: string;
    /** @title Текст кнопки */
    buttonText?: string;
  };
