import { Text, View } from '@react-pdf/renderer';
import { Layout } from './Layout';
import type { Content, Data } from '../types/data';
import { useDataFiles } from '../hooks/useDataFiles';
import { styles } from './style';
import { useEffect, useState } from 'react';
import { Item } from './Item';
import { isData } from '../types/guards';
import { Section } from './Section';
import { TableOfContents } from './TableOfContents';

export function Content() {
  const { files } = useDataFiles();
  const [data, setData] = useState<Record<string, Data[] | Content[]>>({});

  const loadFile = async (file: string): Promise<Data[] | Content[]> => {
    const response = await fetch(`/data/${file}.json`, {
      cache: 'no-store',
    });

    if (!response.ok) {
      throw new Error(`Impossible de charger /data/${file}.json`);
    }

    return response.json();
  };

  useEffect(() => {
    const load = async () => {
      const entries = await Promise.all(
        files.map(async (file) => {
          const value = await loadFile(file.name);

          return [file.name, value] as const;
        }),
      );

      setData(Object.fromEntries(entries));
    };

    load();
  }, [files]);

  return (
    <>
      <Layout header={true}>
        <TableOfContents files={files} data={data} />
      </Layout>

      {files.map((file, index) => {
        const fileData = data[file.name];

        if (!fileData) {
          return null;
        }

        return (
          <Layout key={index} header={true}>
            <View style={styles.pageView}>
              <Text
                style={styles.h2}
                hyphenationPenalty={Infinity}
                id={`file-${file.name}`}
              >
                {file.title}
              </Text>
              {!isData(fileData[0])
                ? fileData.map((item, index) => (
                    <Item
                      key={index}
                      content={item as Content}
                      displayDates={file.displayDates}
                    />
                  ))
                : fileData.map((item, index) => (
                    <Section
                      key={index}
                      id={`${file.name}-${index}`}
                      data={item as Data}
                      displayDates={file.displayDates}
                      displayItemsLenght={true}
                    />
                  ))}
            </View>
          </Layout>
        );
      })}
    </>
  );
}
