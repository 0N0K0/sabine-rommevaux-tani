import { Text, View } from '@react-pdf/renderer';
import { styles } from './style';
import { RichTextPdf } from './RichTextPdf';

export function UnorderedList({ items }: { items: string[] }) {
  return (
    <View style={styles.list}>
      {items.map((item, index) => (
        <View key={index} style={styles.listItem}>
          <Text style={styles.number}> • </Text>
          <RichTextPdf html={item} />
        </View>
      ))}
    </View>
  );
}
