import type { BlockVersion } from '../../model/BlockVersion';
import type { ButtonContent } from '../../ui-kit/Button/ButtonProps';
import type { DescriptionContent } from '../../ui-kit/Description/DescriptionProps';
import type { HeadingContent } from '../../ui-kit/Heading/HeadingContent';
import type { ImageContent } from '../../ui-kit/Img/ImgProps';
import type { ListContent } from '../../ui-kit/List/ListContent';

/**
 * @title Плитка
 */
export type TileContent = HeadingContent &
  DescriptionContent &
  ListContent &
  ButtonContent &
  ImageContent & {
    version?: BlockVersion;
  };
