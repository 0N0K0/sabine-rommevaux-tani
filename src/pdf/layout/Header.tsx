import { View } from '@react-pdf/renderer';
import { styles } from '../style';
import type { Data } from '../../types/data';
import { RichTextPdf } from '../components/RichTextPdf';
import { useFile } from '../../hooks/useFile';

export function Header() {
  const { data } = useFile('header');

  return (
    <View style={styles.header} fixed>
      <RichTextPdf
        style={styles.headerText}
        html={(data as Data).title || ''}
      />
    </View>
  );
}
