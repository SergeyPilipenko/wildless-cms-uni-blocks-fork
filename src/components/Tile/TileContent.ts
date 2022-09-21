import type { BlockVersion } from '../../model/BlockVersion';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { DescriptionContent } from '../../ui-kit/Description/DescriptionContent';
import type { HeadingContent, HeadingTypeContent } from '../../ui-kit/Heading/HeadingContent';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { ListContent } from '../../ui-kit/List/ListContent';

/**
 * @title Плитка
 */
export type TileContent = HeadingContent &
  HeadingTypeContent &
  DescriptionContent &
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
