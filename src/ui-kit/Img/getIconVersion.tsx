export function getIconVersion(image) {
  return typeof image === 'string' ? 'normal' : image.iconVersion || 'normal';
}
