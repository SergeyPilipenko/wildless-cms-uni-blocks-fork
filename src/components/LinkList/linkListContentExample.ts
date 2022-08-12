import type { LinkListContent } from './LinkListContent';

export const linkDocsContentExample: LinkListContent = {
  documents: [
    { text: 'target self', href: '/abc1/cooldoc/', target: '_self' },
    { text: 'target blank', href: '/abc2/wtf/', target: '_blank' },
    { text: 'GlassIcon', href: '/abc3/map/' },
    { text: 'no icon', href: '/abc4' },
    { text: 'документ 5', href: '/abc5' },
    { text: 'документ 6', href: '/abc6/abc' },
    { text: 'Text text text', href: '/abc7/yolo' },
    {
      text: 'Some more generic text to stretch item, and even more, more text, and more generic text, and even more, more text, and even more',
      href: '/abc8/archive/',
    },
    { text: 'И ещё немного текста', href: '/abc9/' },
    {
      text: 'Форматируем, сортируем, смотрим как отображается...',
      href: '/abc10/',
    },
  ],
};
