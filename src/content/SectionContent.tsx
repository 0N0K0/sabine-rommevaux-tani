import { Title, type TitleOrder } from '@mantine/core';
import type { Content, Data } from '../types/data';
import { isData } from '../types/guards';
import { CardContent } from './CardContent';

interface SectionContentProps {
  data: Data;
  level?: TitleOrder;
  displayDates: Boolean;
  displayItemsLenght: Boolean;
}

export function SectionContent({
  data,
  level = 3,
  displayDates,
  displayItemsLenght,
}: SectionContentProps) {
  const sections = data.content?.filter(isData) ?? [];
  const items = data.content?.filter((item) => !isData(item)) ?? [];

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '100%',
        maxWidth: 'calc(1920px / 4 * 3)',
        marginInline: 'auto',
      }}
    >
      {data.title && (
        <Title order={level}>
          {data.title}
          {displayItemsLenght ? (
            <span style={{ fontSize: '24px' }}> ({items.length})</span>
          ) : (
            ''
          )}
        </Title>
      )}

      {sections.map((item, index) => (
        <SectionContent
          key={`section-${index}`}
          data={item}
          level={Math.min(level + 1, 6) as TitleOrder}
          displayDates={displayDates}
          displayItemsLenght={displayItemsLenght}
        />
      ))}

      {items.length > 0 && (
        // <Masonry cols={Math.min(items.length, 4)} gap={16}>
        //   {items.map((item, index) => (
        //     <CardContent
        //       key={index}
        //       content={item as Content}
        //       displayDates={displayDates}
        //     />
        //   ))}
        // </Masonry>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {items.map((item, index) => (
            <CardContent
              key={index}
              content={item as Content}
              displayDates={displayDates}
            />
          ))}
        </div>
      )}
    </section>
  );
}
