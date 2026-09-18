import { Text, View } from '@react-pdf/renderer';
import { styles } from './style';
import type { ReactNode } from 'react';

export function OrderedList({ items }: { items: ReactNode[] }) {
  return (
    <View style={styles.list}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItem} wrap={false}>
          <Text style={styles.number} hyphenationPenalty={Infinity}>
            {index + 1}.{' '}
          </Text>
          <View style={styles.content}>{item}</View>
        </View>
      ))}
    </View>
  );
}
