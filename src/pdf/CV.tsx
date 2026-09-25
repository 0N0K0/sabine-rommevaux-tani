import { Document, Text, View } from '@react-pdf/renderer';
import { Cover } from './pages/Cover';
import { Content } from './pages/Content';
import { useFiles } from '../hooks/useFiles';
import { TableOfContents } from './pages/TableOfContents';
import { Layout } from './layout/Layout';
import { styles } from './style';

export function CV() {
  const files = useFiles();

  return (
    <Document>
      <Cover />
      <TableOfContents files={files} />
      {files.map((file, index) => (
        <Layout key={index} header={true}>
          <View style={styles.pageView}>
            <Text
              style={styles.h2}
              hyphenationPenalty={Infinity}
              id={`file-${file.name}`}
            >
              {file.title}
            </Text>
            <Content file={file} />
          </View>
        </Layout>
      ))}
    </Document>
  );
}
