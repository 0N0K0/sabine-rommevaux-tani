import { Text, View } from '@react-pdf/renderer';
import { styles } from '../../style';
import type { ReactNode } from 'react';

export function UnorderedList({ items }: { items: ReactNode[] }) {
  return (
    <View style={styles.list}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItem} wrap={false}>
          <Text style={styles.number} hyphenationPenalty={Infinity}>
            {' '}
            •{' '}
          </Text>
          <View style={styles.content}>{item}</View>
        </View>
      ))}
    </View>
  );
}
