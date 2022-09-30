import { Button } from '../../ui-kit/Button/Button';

export function renderButton(button) {
  return (
    <Button className="py-4 mr-1" version={button?.version} href={button?.href} target="_blank">
      {button?.text}
    </Button>
  );
}
