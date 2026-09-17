import { Masonry } from '../components/Masonry';
import type { Content, Data } from '../types/data';
import { isData } from '../types/guards';

import { ItemContent } from './ItemContent';
import { SectionContent } from './SectionContent';

export function PanelContent({ data }: { data: Data[] | Content[] | null }) {
  if (!data) {
    return null;
  }

  const isMasonry = !isData(data[0]);

  if (isMasonry) {
    return (
      <Masonry cols={4} gap={16}>
        {data.map((item, index) => (
          <ItemContent key={index} content={item as Content} />
        ))}
      </Masonry>
    );
  }

  return (
    <>
      {data.map((item, index) => (
        <SectionContent key={index} data={item as Data} />
      ))}
    </>
  );
}
