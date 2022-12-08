/**
 * @title Цвет бордера
 * @enumNames ["Основной", "Второстепенный"]
 */
export type BorderVersion = 'primary' | 'secondary';

export const BorderVersionStyleMap: Record<BorderVersion, string> = {
  primary: 'border-main-stroke',
  secondary: 'border-white/50',
};
