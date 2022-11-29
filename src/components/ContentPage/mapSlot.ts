import type { BlockDef, Slot } from '../../model/ContentPageDef';

export const mapSlot =
  (mapper: (blocks?: BlockDef[]) => BlockDef[]) =>
  <S extends Slot>(slot: S): S => ({
    ...slot,
    blocks: mapper(slot.blocks),
    slots: slot.slots
      ? Object.entries(slot.slots).reduce(
          (res, [slotKey, slotBlocks]) => ({
            ...res,
            [slotKey]: mapper(slotBlocks),
          }),
          {},
        )
      : {},
  });
