import { Document, Page, Text, View } from '@react-pdf/renderer';
import { styles } from './style';
import { Header } from './Header';

export const CV = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header />

      <View>
        <Text>Bonjour Onoko !</Text>
        <Text>Voici mon PDF généré avec React.</Text>
      </View>
    </Page>
  </Document>
);
