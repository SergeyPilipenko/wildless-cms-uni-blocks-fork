import { Button } from '../../ui-kit/Button/Button';
import { Icon } from '../../ui-kit/Icon/Icon';
import type { BaseTileIconButton } from './BaseTileProps';

const PADDING_TOP_CLASSES = 'first:mt-0 mt-3';

export function renderButton({ icon, ...button }: BaseTileIconButton, i: number) {
  if (!button?.text) return;

  return icon ? (
    <Button
      className={PADDING_TOP_CLASSES}
      key={String(i)}
      appendLeft={<Icon name={icon} width="24" height="24" />}
      {...button}
    />
  ) : (
    <Button className={PADDING_TOP_CLASSES} key={String(i)} {...button} />
  );
}
