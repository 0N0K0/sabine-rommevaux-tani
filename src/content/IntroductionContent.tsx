import { useEffect, useState } from 'react';
import type { Data, Introduction } from '../types/data';
import { isData } from '../types/guards';
import { SectionContent } from './SectionContent';
import { Button, Typography } from '@mantine/core';
import { BlobProvider } from '@react-pdf/renderer';
import { CV } from '../pdf/CV';

export function IntroductionContent() {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadHeader() {
      try {
        const response = await fetch('/data/introduction.json', {
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error('Impossible de charger header.json');
        }

        const content: Data[] = await response.json();

        setData(content);
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error('Une erreur est survenue'),
        );
      } finally {
        setLoading(false);
      }
    }

    loadHeader();
  }, []);

  if (loading && !data) return null;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {data.map((item, index) => {
        if (isData(item)) {
          return (
            <SectionContent
              key={index}
              data={item}
              displayDates={false}
              displayItemsLenght={false}
            />
          );
        }

        return (
          <section
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              maxWidth: 'calc(1920px / 4 * 3)',
              marginInline: 'auto',
            }}
          >
            {/* {(item as Introduction).keyWords && (
              <span>
                {(item as Introduction).keyWords.map((keyword, index) => (
                  <span key={keyword}>
                    {keyword}
                    {index < (item as Introduction).keyWords.length - 1 && ', '}
                  </span>
                ))}
              </span>
            )} */}
            {(item as Introduction).intro && (
              <Typography
                style={{
                  maxWidth: 'calc(1920px / 4 * 3',
                  marginInline: 'auto',
                  textAlign: 'justify',
                }}
              >
                {(item as Introduction).intro.map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === 0 ? 'intro-first-paragraph' : undefined
                    }
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                    style={{
                      fontSize: index === 0 ? '20px' : '16px',
                    }}
                  />
                ))}
              </Typography>
            )}
            <BlobProvider document={<CV />}>
              {({ url, loading }) => (
                <Button
                  loading={loading}
                  disabled={!url}
                  onClick={() => {
                    if (url) {
                      window.open(url, '_blank');
                    }
                  }}
                  radius="xs"
                  size="lg"
                  style={{ marginInline: 'auto' }}
                >
                  Télécharger mon CV
                </Button>
              )}
            </BlobProvider>
          </section>
        );
      })}
    </>
  );
}
