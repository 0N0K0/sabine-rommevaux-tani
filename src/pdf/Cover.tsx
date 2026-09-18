import { Text, Link, View } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';
import type { Data, Detail, Introduction } from '../types/data';
import { isData } from '../types/guards';
import { Section } from './Section';
import { RichTextPdf } from './RichTextPdf';
import { styles } from './style';

export function Cover() {
  const [headerData, setHeaderData] = useState<Data>({});
  const [introData, setIntroData] = useState<Data[]>([]);

  useEffect(() => {
    async function loadHeader() {
      const response = await fetch('/data/header.json', {
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error('Impossible de charger header.json');
      }

      const content: Data = await response.json();

      setHeaderData(content);
    }

    loadHeader();
  }, []);

  useEffect(() => {
    async function loadIntro() {
      const response = await fetch('/data/introduction.json', {
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error('Impossible de charger header.json');
      }

      const content: Data[] = await response.json();

      setIntroData(content);
    }

    loadIntro();
  }, []);

  return (
    <View>
      <Text style={styles.h1}>{headerData.title}</Text>
      <Text>
        {headerData.content?.map((detail: Detail, index) => (
          <Text key={index}>
            {detail.link ? (
              <Link href={detail.link}>{detail.value}</Link>
            ) : (
              detail.value
            )}

            {index < headerData.content!.length - 1 && ' • '}
          </Text>
        ))}
      </Text>
      {introData.map((item, index) => {
        if (isData(item)) {
          return (
            <Section
              key={index}
              data={item}
              displayDates={false}
              displayItemsLenght={false}
            />
          );
        }

        return (
          <View key={index}>
            {(item as Introduction).intro &&
              (item as Introduction).intro.map((paragraph, index) => (
                <RichTextPdf key={index} html={paragraph} />
              ))}
          </View>
        );
      })}
    </View>
  );
}
