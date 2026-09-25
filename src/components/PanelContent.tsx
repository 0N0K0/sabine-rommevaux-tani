import { Stack } from '@mantine/core';
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

  const isContent = !isData(data[0]);

  if (isContent) {
    return (
      <Stack gap="sm">
        {data.map((item, index) => (
          <CardContent
            key={index}
            content={item as Content}
            displayDates={displayDates}
          />
        ))}
      </Stack>
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
