import { Text, Link, View } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';
import type { Data, Detail, Introduction } from '../types/data';
import { isData } from '../types/guards';
import { Section } from './Section';
import { RichTextPdf } from './RichTextPdf';
import { styles } from './style';
import { Layout } from './Layout';

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
    <Layout header={false}>
      <View style={styles.firstPageView}>
        <View style={{ paddingBottom: 12 }}>
          <Text style={styles.h1} hyphenationPenalty={Infinity}>
            {headerData.title}
          </Text>
          <Text style={{ textAlign: 'center' }} hyphenationPenalty={Infinity}>
            {headerData.content?.map((detail: Detail, index) => (
              <Text key={index} hyphenationPenalty={Infinity}>
                {detail.link ? (
                  <Link href={detail.link}>{detail.value}</Link>
                ) : (
                  detail.value
                )}

                {index < headerData.content!.length - 1 && ' • '}
              </Text>
            ))}
          </Text>
        </View>
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
            <View key={index} style={styles.contentView}>
              {(item as Introduction).intro &&
                (item as Introduction).intro.map((paragraph, index) => (
                  <RichTextPdf
                    key={index}
                    html={paragraph}
                    style={styles.intro}
                  />
                ))}
            </View>
          );
        })}
      </View>
    </Layout>
  );
}
