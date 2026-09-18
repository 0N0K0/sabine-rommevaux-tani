import { Document, Page, Text, View } from '@react-pdf/renderer';

export const CV = () => (
  <Document>
    <Page size="A4">
      <View>
        <Text>Bonjour Onoko !</Text>
        <Text>Voici mon PDF généré avec React.</Text>
      </View>
    </Page>
  </Document>
);
