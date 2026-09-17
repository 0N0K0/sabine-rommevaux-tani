import { Title, type TitleOrder } from '@mantine/core';

import type { Content, Data } from '../types/data';
import { isData } from '../types/guards';

import { CardContent } from './CardContent';
import { Masonry } from '../components/Masonry';

interface SectionContentProps {
  data: Data;
  level?: TitleOrder;
  displayDates: Boolean;
}

export function SectionContent({
  data,
  level = 3,
  displayDates,
}: SectionContentProps) {
  const sections = data.content?.filter(isData) ?? [];
  const items = data.content?.filter((item) => !isData(item)) ?? [];

  return (
    <section>
      {data.title && <Title order={level}>{data.title}</Title>}

      {sections.map((item, index) => (
        <SectionContent
          key={`section-${index}`}
          data={item}
          level={Math.min(level + 1, 6) as TitleOrder}
          displayDates={displayDates}
        />
      ))}

      {items.length > 0 && (
        <Masonry cols={Math.min(items.length, 4)} gap={16}>
          {items.map((item, index) => (
            <CardContent
              key={index}
              content={item as Content}
              displayDates={displayDates}
            />
          ))}
        </Masonry>
      )}
    </section>
  );
}
