import type { LinkDocsContent } from './LinkDocsContent';

export const linkDocsContentExample: LinkDocsContent = {
  title: 'Дополнительные документы',
  subtitle: 'Ответы на часто задаваемые вопросы',
  icon: 'DocIcon',
  documents: [
    { text: 'target self', href: '/abc1/cooldoc.doc', target: '_self' },
    { text: 'target blank', href: '/abc2/wtf.rtf', target: '_blank' },
    { text: 'GlassIcon', href: '/abc3/map.jpeg' },
    { text: 'no icon', href: '/abc4' },
    { text: 'документ 5', href: '/abc5' },
    { text: 'документ 6', href: '/abc6/abc.pdf' },
    { text: 'Text text text', href: '/abc7/yolo.png' },
    {
      text: 'Some more generic text to stretch item, and even more, more text, and more generic text, and even more, more text, and even more',
      href: '/abc8/archive.zip',
      fileSize: '2.3МБ',
    },
    { text: 'И ещё немного текста', href: '/abc9/rarniw.rar', fileSize: '666МБ' },
    {
      text: 'Форматируем, сортируем, смотрим как отображается...',
      href: '/abc10/',
      fileSize: '65ГБ',
    },
  ],
};
