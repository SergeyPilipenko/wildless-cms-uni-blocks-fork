/**
 * @title Таргет (target)
 * @enumNames [
 *    "",
 *    "self (текущее окно или фрейм)",
 *    "blank (новое окно)",
 *    "parent (фрейм-родитель)",
 *    "top (текущее окно)"
 *  ]
 */
export type Target = '' | '_self' | '_blank' | '_parent' | '_top';

export interface LinkCommonProps {
  /** @title URL (href) */
  href?: string;
  target?: Target;
}

/**
 * @title Ссылка
 * @required ["text", "href"]
 */
export interface LinkProps extends LinkCommonProps {
  /** @title Текст */
  text?: string;
}
