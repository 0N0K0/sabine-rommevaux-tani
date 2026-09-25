import type { Content, Data } from './data';

export function isData(item: Content | Data): item is Content {
  return 'title' in item;
}
