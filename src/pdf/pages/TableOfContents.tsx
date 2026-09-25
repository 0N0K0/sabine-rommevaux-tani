import { Link, Text, View } from '@react-pdf/renderer';
import type { Data, File } from '../../types/data';
import { styles } from '../style';
import { RichTextPdf } from '../components/RichTextPdf';
import { useFile } from '../../hooks/useFile';
import { Layout } from '../layout/Layout';

function SectionLinks({ fileName }: { fileName: string }) {
  const { data } = useFile(fileName);

  return (
    <>
      {(data as Data[]).map((section, index) => (
        <Link
          key={index}
          src={`#${fileName}-${index}`}
          style={{ marginLeft: 24 }}
        >
          <RichTextPdf html={(section as Data).title || ''} />
        </Link>
      ))}
    </>
  );
}

export function TableOfContents({ files }: { files: File[] }) {
  return (
    <Layout header={true}>
      <View style={styles.pageView}>
        <Text style={styles.h2}>Sommaire</Text>

        {files.map((file) => {
          return (
            <View key={file.name}>
              <Link src={`#file-${file.name}`}>{file.title}</Link>
              <SectionLinks fileName={file.name} />
            </View>
          );
        })}
      </View>
    </Layout>
  );
}
