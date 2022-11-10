import type { LabelProps, TitleProps } from '../../model/HeadlineType';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';

/**
 * @title Перевод с карты на карту
 */
export type CardTransferContent = LabelProps &
  TitleProps & {
    /** @title Плейсхолдер */
    placeholder?: string;
    button?: ButtonProps;
  };
