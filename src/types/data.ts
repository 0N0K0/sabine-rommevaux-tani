export interface File {
  name: string;
  title: string;
}

export interface DataIndex {
  files: File[];
}

export interface Period {
  startDate: string;
  endDate?: string;
}

export interface Detail {
  key: string;
  value: string | string[];
  link: string;
}

export interface Content {
  dates?: string[];
  periods?: Period[];
  place?: string;
  label?: string;
  link?: string;
  details: Detail[];
}

export interface Data {
  title?: string;
  content?: Content[] | Data[];
}
