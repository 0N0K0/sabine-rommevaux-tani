import { Text, Link, View } from '@react-pdf/renderer';
import type { Data, Detail, Introduction } from '../../types/data';
import { isData } from '../../types/guards';
import { Section } from '../components/Section';
import { RichTextPdf } from '../components/RichTextPdf';
import { styles } from '../style';
import { Layout } from '../layout/Layout';
import { useFile } from '../../hooks/useFile';

export function Cover() {
  const { data: headerData } = useFile('header');
  const { data: introData } = useFile('introduction');

  return (
    <Layout header={false}>
      <View style={styles.firstPageView}>
        <View>
          <RichTextPdf
            style={styles.h1}
            html={(headerData as Data).title || ''}
          />
          <Text style={{ textAlign: 'center' }} hyphenationPenalty={Infinity}>
            {(headerData as Data).content?.map((detail: Detail, index) => (
              <Text key={index} hyphenationPenalty={Infinity}>
                {detail.link ? (
                  <Link href={detail.link}>
                    <RichTextPdf html={detail.value as string} />
                  </Link>
                ) : (
                  <RichTextPdf html={detail.value as string} />
                )}

                {index < (headerData as Data).content!.length - 1 && ' • '}
              </Text>
            ))}
          </Text>
        </View>
        <View style={{ paddingBottom: 12 }}>
          <Text style={{ textAlign: 'center' }}>
            Email :{' '}
            <Link href="mailto:sabine.rommevaux-tani@cnrs.fr">
              sabine.rommevaux-tani@cnrs.fr
            </Link>
          </Text>
          <Text style={{ textAlign: 'center' }}>
            Site internet :{' '}
            <Link href="sabine-rommevaux-tani.onoko.dev">
              sabine-rommevaux-tani.onoko.dev
            </Link>
          </Text>
        </View>
        {(introData as Data[]).map((item, index) => {
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
