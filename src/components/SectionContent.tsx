import { Stack, Title, Typography, type TitleOrder } from '@mantine/core';
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
    <Stack
      gap="sm"
      style={{
        width: '100%',
        maxWidth: 'calc(1920px / 2)',
        marginInline: 'auto',
      }}
    >
      {data.title && (
        <Title order={level} style={{ textWrap: 'balance' }}>
          <Typography component="span">
            <span dangerouslySetInnerHTML={{ __html: data.title }} />
          </Typography>
          {displayItemsLenght ? (
            <span style={{ fontSize: '24px' }}>&nbsp;({items.length})</span>
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
        <Stack gap="sm">
          {items.map((item, index) => (
            <CardContent
              key={index}
              content={item as Content}
              displayDates={displayDates}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
}
