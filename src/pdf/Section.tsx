import { Text, View } from '@react-pdf/renderer';
import { styles, type HeadingLevel } from './style';
import type { Content, Data } from '../types/data';
import { isData } from '../types/guards';
import { Item } from './Item';

interface SectionProps {
  data: Data;
  level?: HeadingLevel;
  displayDates: Boolean;
  displayItemsLenght: Boolean;
}

export function Section({
  data,
  level = 3,
  displayDates,
  displayItemsLenght,
}: SectionProps) {
  const sections = data.content?.filter(isData) ?? [];
  const items = data.content?.filter((item) => !isData(item)) ?? [];

  return (
    <View>
      {data.title && (
        <Text style={styles[`h${level}`]}>
          {data.title}
          {displayItemsLenght ? ' (' + items.length + ')' : ''}
        </Text>
      )}

      {sections.map((item, index) => (
        <Section
          key={index}
          data={item}
          level={Math.min(level + 1, 6) as HeadingLevel}
          displayDates={displayDates}
          displayItemsLenght={displayItemsLenght}
        />
      ))}

      {items.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {items.map((item, index) => (
            <Item
              key={index}
              content={item as Content}
              displayDates={displayDates}
            />
          ))}
        </div>
      )}
    </View>
  );
}
