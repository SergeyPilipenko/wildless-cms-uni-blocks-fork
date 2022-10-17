/**
 * @title Размер заголовка
 * @enumNames ["Самый большой", "Очень большой", "Большой", "Средний", "Маленький"]
 */
export type HeadlineVersion = 'XXL' | 'XL' | 'L' | 'M' | 'S';

export type TitleProps = {
  /** @title Заголовок */
  title?: string;
};

export type DescriptionProps = {
  /** @title Описание */
  description?: string;
};

export type HeadlineCommonProps = TitleProps & DescriptionProps;

export type HeadlineProps = HeadlineCommonProps & {
  headlineVersion?: HeadlineVersion;
};
