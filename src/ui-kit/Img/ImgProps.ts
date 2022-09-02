import type { Picture } from '../../model/Picture';
import type { IconCompatibilityFields, IconName } from '../Icon/IconProps';

export type Image = Picture | IconName;

export interface ImageContent<T = Picture> {
  image?: T;
}
export interface ImageProps<T> extends ImageContent<T>, IconCompatibilityFields {
  className?: string;
  imageClassName?: string;
}
