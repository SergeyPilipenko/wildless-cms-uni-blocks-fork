/**
 * @title Цвет блока
 * @enumNames ["Основная", "Второстепенная"]
 */
export type BlockVersion = 'primary' | 'secondary';

/**
 * @title Цвет блока
 * @enumNames ["Прозрачная", "Основная", "Второстепенная"]
 */
export type BlockVersionWithTransparent = 'transparent' | 'primary' | 'secondary';

export const VersionStyleMap: Record<BlockVersion, string> = {
  primary: 'bg-white text-primary-text',
  secondary: 'bg-primary-main text-white',
};
