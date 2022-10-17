import type { TariffsTableCellIndexProps } from '../../components/TariffsTable/TariffsTableContent';

export type RowsData = {
  data?: string;
  cols?: string[];
};

export type DataItem = {
  title?: string;
  rowsData?: RowsData[][];
};

export type TableData = {
  currency?: string;
  items?: DataItem[];
};

export type TableFetchData = {
  tableData?: TableData[];
};

export interface TariffsTableInnerContent {
  /** @title Справочник */
  dataUrl?: string;
  /** @title Ссылка PDF-файл */
  pdfUrl?: string;
}

export interface TariffsTableInnerEvent
  extends Partial<TariffsTableCellIndexProps>,
    TariffsTableInnerContent {}
