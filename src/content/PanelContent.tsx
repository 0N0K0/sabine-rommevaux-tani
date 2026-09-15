import type { Content, Data } from '../types/data';
import { isData } from '../types/guards';
import { ItemContent } from './ItemContent';
import { SectionContent } from './SectionContent';

export function PanelContent({ data }: { data: Data[] | Content[] | null }) {
  if (!data) {
    return null;
  }
  return (
    <>
      {data.map((item, index) => {
        if (isData(item)) {
          return <SectionContent key={index} data={item as Data} />;
        }
        return <ItemContent key={index} content={item as Content} />;
      })}
    </>
  );
}
