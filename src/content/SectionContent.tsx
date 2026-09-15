import type { Content, Data } from '../types/data';
import { isData } from '../types/guards';
import { ItemContent } from './ItemContent';

export function SectionContent({ data }: { data: Data }) {
  return (
    <section>
      {data.title && <h2>{data.title}</h2>}
      {data.content?.map((item, index) => {
        if (isData(item)) {
          return <SectionContent key={index} data={item as Data} />;
        }
        return <ItemContent key={index} content={item as Content} />;
      })}
    </section>
  );
}
