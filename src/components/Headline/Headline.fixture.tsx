import { context } from '../../setup-fixture';

import { Headline } from './Headline';
import { HeadlineContent } from './HeadlineContent';

export const HEADLINE: HeadlineContent = {
  title: 'Своя кредитная карта',
  description: 'Карта работает в 180 странах мира. Бесплатное снятие наличных в любых банкоматах.',
  align: 'center',
};

export const HEADLINE_PRIMARY: HeadlineContent = {
  ...HEADLINE,
  bgColorHeadline: 'primary',
};

export const HEADLINE_SECONDARY: HeadlineContent = {
  ...HEADLINE,
  bgColorHeadline: 'secondary',
};

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...HEADLINE} />
      <Headline className="col-span-12" context={context} {...HEADLINE} align="left" />
      <Headline className="col-span-12" context={context} {...HEADLINE} align="right" />
    </div>
  ),
  primary: (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...HEADLINE_PRIMARY} />
      <Headline className="col-span-12" context={context} {...HEADLINE_PRIMARY} align="left" />
      <Headline className="col-span-12" context={context} {...HEADLINE_PRIMARY} align="right" />
    </div>
  ),
  secondary: (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...HEADLINE_SECONDARY} />
      <Headline className="col-span-12" context={context} {...HEADLINE_SECONDARY} align="left" />
      <Headline className="col-span-12" context={context} {...HEADLINE_SECONDARY} align="right" />
    </div>
  ),
};
