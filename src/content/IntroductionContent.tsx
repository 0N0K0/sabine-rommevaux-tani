import { useEffect, useState } from 'react';
import type { Data, Introduction } from '../types/data';
import { isData } from '../types/guards';
import { SectionContent } from './SectionContent';

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

  if (loading && !data) return <p>Chargement...</p>;

  if (error) return <p>{error.message}</p>;

  console.log(data);

  return (
    <>
      {data.map((item, index) => {
        if (isData(item)) {
          return (
            <SectionContent key={index} data={item} displayDates={false} />
          );
        }

        return (
          <section key={index}>
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
            {(item as Introduction).intro.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </section>
        );
      })}
    </>
  );
}
