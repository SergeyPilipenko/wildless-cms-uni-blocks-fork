import { JSX } from '@redneckz/uni-jsx';
import { UniBlockProps } from '../../model/JSXBlock';
import { BlockWrapper } from '../../ui-kit/BlockWrapper';
import { Button } from '../../ui-kit/Button/Button';
import { Description } from '../../ui-kit/Description/Description';
import { Heading } from '../../ui-kit/Heading/Heading';
import type { ContactItemProps, ContactsBlockContent, InfoItemProps } from './ContactsBlockContent';

export interface ContactsBlockProps extends ContactsBlockContent, UniBlockProps {}

interface RenderContactsColumnProps {
  contactsColumn?: ContactItemProps[];
  index?: number;
}

const contactsBlockStyleMap = {
  primary: 'bg-white',
  secondary: 'bg-primary-main text-white',
};

export const ContactsBlock = JSX<ContactsBlockProps>(
  ({ className = '', contacts, context, info, contactsBlockVersion = 'secondary', ...rest }) => {
    return (
      <BlockWrapper
        context={context}
        className={`${contactsBlockStyleMap[contactsBlockVersion]} flex p-12 ${className}`}
        {...rest}
      >
        {info ? renderInfo(info) : null}
        {contacts ? renderContacts(contacts) : null}
      </BlockWrapper>
    );
  },
);

const renderInfo = (info: InfoItemProps[]) => (
  <div className="flex grow basis-0 pr-11">
    {info.map(({ title, description, button }, index) => (
      <div className="grow basis-0 pr-11 last:pr-0" key={String(index)}>
        <Heading as="h5" headingType="h5" title={title} className="pb-2.5" />
        <Description className="text-l-light pb-6" description={description} />
        {button ? <Button {...button} /> : null}
      </div>
    ))}
  </div>
);

const renderContacts = (contacts: ContactItemProps[][]) => (
  <div className="flex grow basis-0">
    {contacts.map((contactsColumn, index) => renderContactsColumn({ contactsColumn, index }))}
  </div>
);

const renderContactsColumn = ({ contactsColumn, index }: RenderContactsColumnProps) =>
  contactsColumn ? (
    <div className="flex flex-col grow basis-0 pr-11" key={String(index)}>
      {contactsColumn.map(({ title, description, additionalDescription }, key) => (
        <div className="pr-11 last:pr-0 last:mt-5" key={String(key)}>
          <Heading as="h5" headingType="h5" title={title} />
          <Description className="text-l-light mt-2.5" description={description} />
          {additionalDescription ? (
            <Description
              className="text-m-light mt-1.5 opacity-80"
              description={additionalDescription}
            />
          ) : null}
        </div>
      ))}
    </div>
  ) : null;
