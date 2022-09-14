export function style2className(style: string[] | undefined | null): string {
  return style ? style.filter(Boolean).join(' ') : '';
}
