import { Masonry } from '../components/Masonry';
import type { Content, Data } from '../types/data';
import { isData } from '../types/guards';
import { ItemContent } from './ItemContent';
import { SectionContent } from './SectionContent';

export function PanelContent({
  data,
  displayDates,
}: {
  data: Data[] | Content[] | null;
  displayDates: Boolean;
}) {
  if (!data) {
    return null;
  }

  const isMasonry = !isData(data[0]);

  if (isMasonry) {
    return (
      <Masonry cols={4} gap={16}>
        {data.map((item, index) => (
          <ItemContent
            key={index}
            content={item as Content}
            displayDates={displayDates}
          />
        ))}
      </Masonry>
    );
  }

  return (
    <>
      {data.map((item, index) => (
        <SectionContent
          key={index}
          data={item as Data}
          displayDates={displayDates}
        />
      ))}
    </>
  );
}
