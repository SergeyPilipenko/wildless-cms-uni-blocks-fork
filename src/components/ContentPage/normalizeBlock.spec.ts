import type { BlockDef } from '../../model/ContentPageDef';
import { normalizeBlock } from './normalizeBlock';

describe('normalizeBlock', () => {
  it('should return new block definition with "blocks" and "slots" property and without "mobile" property', () => {
    const blockDef: BlockDef = {
      type: 'TextBlock',
      content: {
        title: 'Desktop Title',
        description: 'Desktop description',
      },
      mobile: {
        type: 'TextBlock',
        content: {
          title: 'Mobile Title',
        },
      },
    };

    const desktopBlockDef: BlockDef = {
      type: 'TextBlock',
      blocks: [],
      slots: {},
      content: {
        title: 'Desktop Title',
        description: 'Desktop description',
      },
    };

    expect(normalizeBlock(blockDef)).toEqual(desktopBlockDef);
  });

  it('should return new block definition same to input', () => {
    const blockDef: BlockDef = {
      type: 'TextBlock',
      blocks: [],
      slots: {},
      content: {
        title: 'Desktop Title',
        description: 'Desktop description',
      },
    };

    const desktopBlockDef: BlockDef = {
      type: 'TextBlock',
      blocks: [],
      slots: {},
      content: {
        title: 'Desktop Title',
        description: 'Desktop description',
      },
    };

    expect(normalizeBlock(blockDef)).toEqual(desktopBlockDef);
  });
});
