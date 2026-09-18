import { Link, Text, View } from '@react-pdf/renderer';
import type { Content, Data, File } from '../types/data';
import { isData } from '../types/guards';
import { styles } from './style';

interface TableOfContentsProps {
  files: File[]; // à remplacer par le type réel de tes fichiers
  data: Record<string, Data[] | Content[]>;
}

export function TableOfContents({ files, data }: TableOfContentsProps) {
  return (
    <View style={styles.pageView}>
      <Text style={styles.h2}>Sommaire</Text>

      {files.map((file) => {
        const fileData = data[file.name];

        if (!fileData || !isData(fileData[0])) {
          return null;
        }

        return (
          <View key={file.name}>
            <Link src={`#file-${file.name}`}>{file.title}</Link>

            {fileData.map((section, index) => (
              <Link
                key={index}
                src={`#${file.name}-${index}`}
                style={{ marginLeft: 24 }}
              >
                {(section as Data).title}
              </Link>
            ))}
          </View>
        );
      })}
    </View>
  );
}
