import { context } from '../../react/setup-fixture';

import { Picture } from '../../model/Picture';
import { Headline } from './Headline';
import { HeadlineContent } from './HeadlineContent';

export const HEADLINE: HeadlineContent = {
  title: 'Своя кредитная карта',
  description: 'Карта работает в 180 странах мира. Бесплатное снятие наличных в любых банкоматах.',
  align: 'center',
  bgColorHeadline: 'transparent',
};

const image: Picture = {
  src: 'globe-1.png',
  format: 'webp',
  size: {
    width: 180,
    height: 180,
  },
};

const defaultProps: HeadlineContent = {
  title: 'Копите в нескольких валютах',
  description:
    'Откройте мультивалютный вклад, чтобы распределить свои вложения. Это до 4 счетов в разных валютах внутри одного вклада',
  image: image,
};

const primaryProps: HeadlineContent = {
  ...defaultProps,
  bgColorHeadline: 'primary',
};

const secondaryProps: HeadlineContent = {
  ...defaultProps,
  bgColorHeadline: 'secondary',
};

export default {
  'default left alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...defaultProps} align="left" />
    </div>
  ),
  'default center alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...defaultProps} align="center" />
    </div>
  ),
  'default right alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...defaultProps} align="right" />
    </div>
  ),

  'primary left alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...primaryProps} align="left" />
    </div>
  ),
  'primary center alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...primaryProps} align="center" />
    </div>
  ),
  'primary right alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...primaryProps} align="right" />
    </div>
  ),
  'primary without description': (
    <div className="container grid grid-cols-12">
      <Headline
        className="col-span-12"
        context={context}
        title="Копите в нескольких валютах"
        image={image}
        bgColorHeadline="primary"
      />
    </div>
  ),
  'primary without title': (
    <div className="container grid grid-cols-12">
      <Headline
        className="col-span-12"
        context={context}
        description="Откройте мультивалютный вклад, чтобы распределить свои вложения. Это до 4 счетов в разных валютах внутри одного вклада"
        image={image}
        bgColorHeadline="primary"
      />
    </div>
  ),

  'secondary left alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...secondaryProps} align="left" />
    </div>
  ),
  'secondary center alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...secondaryProps} align="center" />
    </div>
  ),
  'secondary right alignment': (
    <div className="container grid grid-cols-12">
      <Headline className="col-span-12" context={context} {...secondaryProps} align="right" />
    </div>
  ),
  'secondary without description': (
    <div className="container grid grid-cols-12">
      <Headline
        className="col-span-12"
        context={context}
        title="Копите в нескольких валютах"
        image={image}
        bgColorHeadline="secondary"
      />
    </div>
  ),
  'secondary without title': (
    <div className="container grid grid-cols-12">
      <Headline
        className="col-span-12"
        context={context}
        description="Откройте мультивалютный вклад, чтобы распределить свои вложения. Это до 4 счетов в разных валютах внутри одного вклада"
        image={image}
        bgColorHeadline="secondary"
      />
    </div>
  ),
};
