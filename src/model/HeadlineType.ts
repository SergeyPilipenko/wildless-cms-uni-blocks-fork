/**
 * @title Размер заголовка
 * @enumNames ["Самый большой", "Очень большой", "Большой", "Средний", "Маленький"]
 */
export type HeadlineVersion = 'XXL' | 'XL' | 'L' | 'M' | 'S';

export type TitleProp = {
  /** @title Заголовок */
  title?: string;
};

export type DescriptionProp = {
  /** @title Описание */
  description?: string;
};

export type HeadlineCommonProps = TitleProp & DescriptionProp;

export type HeadlineProps = HeadlineCommonProps & {
  headlineVersion?: HeadlineVersion;
};
