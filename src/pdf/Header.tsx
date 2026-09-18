import { Text, View } from '@react-pdf/renderer';
import { styles } from './style';

export const Header = () => (
  <View style={styles.header} fixed>
    <Text>Mon entreprise</Text>
  </View>
);
