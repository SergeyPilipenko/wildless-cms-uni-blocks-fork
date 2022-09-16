import type { BlockVersion } from '../../model/BlockVersion';
import type { Picture } from '../../model/Picture';
import type { ButtonWithIconProps } from '../../ui-kit/Button/ButtonProps';
import type { HeadingType } from '../../ui-kit/Heading/HeadingContent';
import type { AlignType } from '../../model/AlignType';

/**
 * @title Общий компонент плиток
 */
export type BaseTileCommonProps = BaseTileTitleProps & BaseTileMainProps;

/**
 * @title Заголовк плитки
 */
export interface BaseTileTitleProps {
  /** @title Заголовок */
  title?: string;
  /**
   * @title Тип заголовка
   */
  headingType?: HeadingType;
}

export interface BaseTileMainProps {
  description?: string;
  image?: Picture;
  /** @title Список */
  items?: string[];

  list?: string;

  /**
   * @title Кнопки
   * @maxItems 4
   */
  buttons?: ButtonWithIconProps[];
  version?: BlockVersion;
  align?: AlignType;
}
