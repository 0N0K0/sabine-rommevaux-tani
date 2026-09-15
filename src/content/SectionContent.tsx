import { Title, type TitleOrder } from '@mantine/core';
import type { Content, Data } from '../types/data';
import { isData } from '../types/guards';
import { ItemContent } from './ItemContent';

interface SectionContentProps {
  data: Data;
  level?: TitleOrder;
}

export function SectionContent({ data, level = 2 }: SectionContentProps) {
  return (
    <section>
      {data.title && <Title order={level}>{data.title}</Title>}

      {data.content?.map((item, index) => {
        if (isData(item)) {
          return (
            <SectionContent
              key={index}
              data={item as Data}
              level={Math.min(level + 1, 6) as TitleOrder}
            />
          );
        }

        return <ItemContent key={index} content={item as Content} />;
      })}
    </section>
  );
}
