import type { Picture } from '../model/Picture';

export const checkIsIconRenderable = (icon?: Picture) => Boolean(icon?.icon || icon?.src);
