import { Text, View } from '@react-pdf/renderer';
import { styles } from './style';
import { RichTextPdf } from './RichTextPdf';

export function OrderedList({ items }: { items: string[] }) {
  return (
    <View style={styles.list}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.number}>{index + 1}. </Text>
          <RichTextPdf html={item} style={styles.content} />
        </View>
      ))}
    </View>
  );
}
