import { Text, View } from '@react-pdf/renderer';
import { styles } from './style';

export const Footer = () => (
  <View style={styles.footer} fixed>
    <Text
      render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
    />
  </View>
);
