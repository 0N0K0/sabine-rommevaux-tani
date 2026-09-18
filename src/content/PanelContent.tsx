import type { Content, Data } from '../types/data';
import { isData } from '../types/guards';
import { CardContent } from './CardContent';
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
    // return (
    //   <Masonry cols={4} gap={16}>
    //     {data.map((item, index) => (
    //       <CardContent
    //         key={index}
    //         content={item as Content}
    //         displayDates={displayDates}
    //       />
    //     ))}
    //   </Masonry>
    // );
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {data.map((item, index) => (
          <CardContent
            key={index}
            content={item as Content}
            displayDates={displayDates}
          />
        ))}
      </div>
    );
  }

  return (
    <>
      {data.map((item, index) => (
        <SectionContent
          key={index}
          data={item as Data}
          displayDates={displayDates}
          displayItemsLenght={true}
        />
      ))}
    </>
  );
}
