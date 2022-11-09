import type { BlockDef } from '../../model/ContentPageDef';
import { normalizeBlock } from './normalizeBlock.mobile';

describe('normalizeBlock', () => {
  it('should return new block definition where properties from "mobile" override desktop properties', () => {
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

    const mobileBlockDef: BlockDef = {
      type: 'TextBlock',
      content: {
        title: 'Mobile Title',
        description: 'Desktop description',
      },
    };

    expect(normalizeBlock(blockDef)).toEqual(mobileBlockDef);
  });

  it('should return new block definition same to input', () => {
    const blockDef: BlockDef = {
      type: 'TextBlock',
      content: {
        title: 'Desktop Title',
        description: 'Desktop description',
      },
    };

    const mobileBlockDef: BlockDef = {
      type: 'TextBlock',
      content: {
        title: 'Desktop Title',
        description: 'Desktop description',
      },
    };

    expect(normalizeBlock(blockDef)).toEqual(mobileBlockDef);
  });

  it('should return new block definition where content contains mobile content', () => {
    const blockDef: BlockDef = {
      type: 'TextBlock',
      mobile: {
        type: 'TextBlock',
        content: {
          title: 'Mobile Title',
        },
      },
    };

    const mobileBlockDef: BlockDef = {
      type: 'TextBlock',
      content: {
        title: 'Mobile Title',
      },
    };

    expect(normalizeBlock(blockDef)).toEqual(mobileBlockDef);
  });
});
