import { Button } from '../../ui-kit/Button/Button';
import type { ButtonProps } from '../../ui-kit/Button/ButtonProps';

export function renderButton(button: ButtonProps) {
  return (
    <Button className="py-4 mr-1" version={button?.version} href={button?.href} target="_blank">
      {button?.text}
    </Button>
  );
}
