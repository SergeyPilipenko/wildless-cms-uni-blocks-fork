import { JSX } from '@redneckz/uni-jsx';
import { Button } from '../../ui-kit/Button/Button';
import type { ContactInfo } from './FooterContent';

export interface ContactsProps {
  className?: string;
  items?: ContactInfo[];
  hasButton?: boolean;
}

export const Contacts = JSX<ContactsProps>(({ className = '', items, hasButton }) => (
  <div className={className}>
    {items?.length ? items.map(renderContact) : null}
    {hasButton ? (
      <Button
        version="primary"
        className="mb-6 w-full"
        href="/"
        target="_blank"
        ariaLabel="Обратная связь"
        text="Обратная связь"
      />
    ) : null}
  </div>
));

const renderContact = (item: ContactInfo, index: number) => {
  const { type, text, description } = item;

  return (
    <div className="mb-4" key={String(index)}>
      <div>{renderText(type, text)}</div>
      <div className="mt-1 text-s-light text-secondary-text">{description}</div>
    </div>
  );
};

const renderText = (type: ContactInfo['type'], text = '') => {
  switch (type) {
    case 'tel':
      return (
        <a
          className="text-h6 text-primary-text hover:text-primary-main no-underline"
          href={`tel:${formatTel(text)}`}
        >
          {text}
        </a>
      );
    case 'email':
      return (
        <a className="text-xl-light text-primary-text no-underline" href={`mailto:${text}`}>
          {text}
        </a>
      );
    default:
      return <span>{text}</span>;
  }
};

const formatTel = (s: string) => s.replaceAll(/\D/g, '');
