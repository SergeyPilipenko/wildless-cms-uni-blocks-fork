import { migrate } from './0.4.5.js';

const content = {
  blocks: [
    {
      content: {
        navigatorTabs: [
          {
            text: 'Как оформить',
            href: '#howto',
            target: '_blank',
          },
          {
            text: 'Частые вопросы',
            href: '#faq',
          },
          {
            text: 'Тарифы',
          },
        ],
      },
      style: ['col-span-12'],
      type: 'NavigatorTabs',
    },
    {
      content: {
        groupBlocks: [
          {
            blockType: 'ProductBlock',
            style: ['col-span-12'],
            title: 'Кредитная карта для покупок в рассрочку',
          },
        ],
        tabs: [
          {
            title: 'Кобрендинговые',
            index: 1,
            tag: 'tag1',
          },
          {
            title: 'Социальные',
            index: 2,
            tag: 'tag2',
          },
        ],
        isShowCounter: true,
        blocks: [
          {
            blockType: 'ProductTile',
            title: 'Продуктовая плитка',
            tags: ['tag1'],
          },
        ],
      },
      style: ['col-span-12'],
      type: 'GroupBlock',
    },
    {
      content: {
        columns: [
          {
            data: [
              [
                {
                  list: {
                    items: [],
                  },
                  image: {
                    size: {},
                  },
                  buttons: [],
                  label: 'Да',
                },
              ],
              [
                {
                  list: {
                    items: [],
                  },
                  image: {
                    size: {},
                  },
                  label: '₽',
                },
              ],
              [
                {
                  list: {},
                  image: {
                    size: {},
                  },
                  label:
                    '100 тыс ₽ — 10 млн ₽ (не более 50% от рыночной стоимости объекта недвижимости, передаваемого в залог).',
                },
              ],
              [
                {
                  list: {},
                  image: {
                    size: {},
                  },
                  label: 'До 10 лет',
                },
              ],
              [
                {
                  list: {
                    items: [
                      'Наличие записей в похозяйственной книге органа местного самоуправления о ведении гражданином личного подсобного',
                    ],
                  },
                  image: {
                    size: {},
                  },
                  buttons: [
                    {
                      version: 'primary',
                      icon: {
                        size: {},
                      },
                      text: 'Скрыть',
                    },
                  ],
                  label: 'Для граждан, ведущих личное хозяйство',
                },
              ],
            ],
          },
        ],
        rowHeaders: [
          {
            icon: {
              size: {},
              sources: [],
              icon: 'PercentageRoundIcon',
            },
            title: 'Кредит на любые цели',
          },
          {
            icon: {
              size: {},
              icon: 'MoneyIcon',
            },
            title: 'Валюта кредита',
          },
          {
            icon: {
              size: {},
              icon: 'WalletIcon',
            },
            title: 'Сумма кредита',
          },
          {
            icon: {
              size: {},
              icon: 'SmallClockIcon',
            },
            title: 'Срок кредита',
          },
        ],
        title: 'Тарифы',
        orientation: 'vertical',
      },
      style: ['col-span-12'],
      type: 'TariffsTable',
    },
  ],
};

describe('migrate_0_4_5', () => {
  it(`should migrate json to 0.4.5 uni block`, () => {
    expect(migrate('foo.json', { content })).toMatchInlineSnapshot(`
      Object {
        "content": Object {
          "blocks": Array [
            Object {
              "content": Object {
                "navigatorTabs": Array [
                  Object {
                    "href": "#howto",
                    "target": "_blank",
                    "text": "Как оформить",
                  },
                  Object {
                    "href": "#faq",
                    "text": "Частые вопросы",
                  },
                  Object {
                    "text": "Тарифы",
                  },
                ],
              },
              "style": Array [
                "col-span-12",
              ],
              "type": "NavigatorTabs",
            },
            Object {
              "content": Object {
                "blocks": Array [
                  Object {
                    "blockType": "ProductTile",
                    "tags": Array [
                      "tag1",
                    ],
                    "title": "Продуктовая плитка",
                  },
                ],
                "groupBlocks": Array [
                  Object {
                    "blockType": "ProductBlock",
                    "style": Array [
                      "col-span-12",
                    ],
                    "title": "Кредитная карта для покупок в рассрочку",
                  },
                ],
                "isShowCounter": true,
                "tabs": Array [
                  Object {
                    "index": 1,
                    "tag": "tag1",
                    "title": "Кобрендинговые",
                  },
                  Object {
                    "index": 2,
                    "tag": "tag2",
                    "title": "Социальные",
                  },
                ],
              },
              "style": Array [
                "col-span-12",
              ],
              "type": "GroupBlock",
            },
            Object {
              "content": Object {
                "columns": Array [
                  Object {
                    "data": Array [
                      Array [
                        Object {
                          "buttons": Array [],
                          "image": Object {
                            "size": Object {},
                          },
                          "label": "Да",
                          "list": Object {
                            "items": Array [],
                          },
                        },
                      ],
                      Array [
                        Object {
                          "image": Object {
                            "size": Object {},
                          },
                          "label": "₽",
                          "list": Object {
                            "items": Array [],
                          },
                        },
                      ],
                      Array [
                        Object {
                          "image": Object {
                            "size": Object {},
                          },
                          "label": "100 тыс ₽ — 10 млн ₽ (не более 50% от рыночной стоимости объекта недвижимости, передаваемого в залог).",
                          "list": Object {},
                        },
                      ],
                      Array [
                        Object {
                          "image": Object {
                            "size": Object {},
                          },
                          "label": "До 10 лет",
                          "list": Object {},
                        },
                      ],
                      Array [
                        Object {
                          "buttons": Array [
                            Object {
                              "icon": Object {
                                "size": Object {},
                              },
                              "text": "Скрыть",
                              "version": "primary",
                            },
                          ],
                          "image": Object {
                            "size": Object {},
                          },
                          "label": "Для граждан, ведущих личное хозяйство",
                          "list": Object {
                            "items": Array [
                              "Наличие записей в похозяйственной книге органа местного самоуправления о ведении гражданином личного подсобного",
                            ],
                          },
                        },
                      ],
                    ],
                  },
                ],
                "orientation": "vertical",
                "rowHeaders": Array [
                  Object {
                    "icon": Object {
                      "icon": "PercentageRoundIcon",
                      "size": Object {},
                      "sources": Array [],
                    },
                    "title": "Кредит на любые цели",
                  },
                  Object {
                    "icon": Object {
                      "icon": "MoneyIcon",
                      "size": Object {},
                    },
                    "title": "Валюта кредита",
                  },
                  Object {
                    "icon": Object {
                      "icon": "WalletIcon",
                      "size": Object {},
                    },
                    "title": "Сумма кредита",
                  },
                  Object {
                    "icon": Object {
                      "icon": "SmallClockIcon",
                      "size": Object {},
                    },
                    "title": "Срок кредита",
                  },
                ],
                "title": "Тарифы",
              },
              "style": Array [
                "col-span-12",
              ],
              "type": "TariffsTable",
            },
          ],
        },
      }
    `);
  });
});
