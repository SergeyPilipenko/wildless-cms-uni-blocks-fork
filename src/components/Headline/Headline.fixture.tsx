import { context } from '../../react/setup-fixture';

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
  'default left alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...HEADLINE} align="left" />
    </div>
  ),
  'default center alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...HEADLINE} />
    </div>
  ),
  'default right alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...HEADLINE} align="right" />
    </div>
  ),
  'primary left alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...HEADLINE_PRIMARY} align="left" />
    </div>
  ),
  'primary center alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...HEADLINE_PRIMARY} />
    </div>
  ),
  'primary right alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...HEADLINE_PRIMARY} align="right" />
    </div>
  ),
  'secondary left alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...HEADLINE_SECONDARY} align="left" />
    </div>
  ),
  'secondary center alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...HEADLINE_SECONDARY} />
    </div>
  ),
  'secondary right alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...HEADLINE_SECONDARY} align="right" />
    </div>
  ),
};
