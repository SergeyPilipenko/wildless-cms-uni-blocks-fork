import type { BlockVersion } from '../../model/BlockVersion';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { DescriptionProp } from '../../model/HeadlineType';
import type { HeadingCommonProps } from '../../ui-kit/Heading/HeadingProps';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { ListContent } from '../../ui-kit/List/ListContent';

/**
 * @title Плитка
 */
export type TileContent = HeadingCommonProps &
  DescriptionProp &
  ListContent &
  ButtonContent &
  ImageContent & {
    /**
     *  @title Буллиты
     *  @default true
     */
    isDotted?: boolean;
    version?: BlockVersion;
  };
