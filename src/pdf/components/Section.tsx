import { Text, View } from '@react-pdf/renderer';
import { styles, type HeadingLevel } from '../style';
import type { Content, Data } from '../../types/data';
import { isData } from '../../types/guards';
import { Item } from './Item';
import { OrderedList } from './lists/OrderedList';
import { RichTextPdf } from './RichTextPdf';
import { UnorderedList } from './lists/UnorderedList';

interface SectionProps {
  data: Data;
  level?: HeadingLevel;
  displayDates: Boolean;
  displayItemsLenght: Boolean;
  id?: string;
}

export function Section({
  data,
  level = 3,
  displayDates,
  displayItemsLenght,
  id,
}: SectionProps) {
  const sections = data.content?.filter(isData) ?? [];
  const items = data.content?.filter((item) => !isData(item)) ?? [];

  return (
    <View style={styles.contentView} break={data.break || false} id={id}>
      {data.title && (
        <Text style={styles[`h${level}`]} hyphenationPenalty={Infinity}>
          <RichTextPdf html={data.title || ''} />
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

      {items.length > 0 &&
        (data.ordered ? (
          <OrderedList
            items={items.map((item, index) => (
              <Item
                key={index}
                content={item as Content}
                displayDates={displayDates}
              />
            ))}
          />
        ) : (
          <UnorderedList
            items={items.map((item, index) => (
              <Item
                key={index}
                content={item as Content}
                displayDates={displayDates}
              />
            ))}
          />
        ))}
    </View>
  );
}
