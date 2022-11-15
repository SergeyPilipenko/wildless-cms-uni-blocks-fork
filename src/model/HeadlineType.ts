/**
 * @title Размер заголовка
 * @enumNames ["Самый большой", "Очень большой", "Большой", "Средний", "Маленький"]
 */
export type HeadlineVersion = 'XXL' | 'XL' | 'L' | 'M' | 'S';

/**
 * @title Размер заголовка
 * @enumNames ["Самый большой тонкий", "Самый большой", "Очень большой тонкий", "Очень большой", "Большой", "Средний", "Маленький"]
 */
export type HeadlineSmallVersion = 'XL_L' | 'XL_R' | 'L_L' | 'L_R' | 'M' | 'S' | 'XS';

export type TitleProps = {
  /** @title Заголовок */
  title?: string;
};

export type DescriptionProps = {
  /** @title Описание */
  description?: string;
};

export type LabelProps = {
  /** @title Название */
  label?: string;
};

export type HeadlineCommonProps = TitleProps & DescriptionProps;

export type HeadlineProps = HeadlineCommonProps & {
  headlineVersion?: HeadlineVersion;
};

export type HeadlineSmallProps = HeadlineCommonProps & {
  headlineSmallVersion?: HeadlineSmallVersion;
};
