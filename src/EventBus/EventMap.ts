import type { AnchorClickScrollingEvent, TabActivationEvent } from '../components/Tabs/Tabs';
import type { TariffsTableInnerEvent } from '../ui-kit/InnerTable/InnerTableProps';

export interface EventMap {
  tab: TabActivationEvent;
  tariffInnerTable: TariffsTableInnerEvent;
  anchorClick: AnchorClickScrollingEvent;
}
