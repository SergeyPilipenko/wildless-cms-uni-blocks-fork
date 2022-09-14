export const style2className = (style: string[] | undefined | null): string =>
  style ? style.join(' ') : '';
