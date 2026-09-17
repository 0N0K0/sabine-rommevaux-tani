export interface File {
  name: string;
  title: string;
  displayDates: boolean;
}

export interface DataIndex {
  files: File[];
}

export interface Period {
  startDate: string;
  endDate?: string;
}

export interface Detail {
  key?: string;
  value?: string | string[];
  link?: string;
}

export interface Content {
  dates?: string[];
  periods?: Period[];
  place?: string;
  label?: string;
  link?: string;
  details?: Detail[];
  content?: Content[];
}

export interface Data {
  title?: string;
  content?: Content[] | Data[];
}
