import { Anchor, Button, Text, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import type { Data, Detail } from '../types/data';

export function HeaderContent() {
  const [data, setData] = useState<Data>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadHeader() {
      try {
        const response = await fetch('/data/header.json', {
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error('Impossible de charger header.json');
        }

        const content: Data = await response.json();

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
      <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
        <Title order={1}>{data.title}</Title>
      </a>
      <Text size="18px">
        {data.content?.map((detail: Detail, index) => (
          <>
            {detail.link ? (
              <Anchor
                href={detail.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {detail.value}
              </Anchor>
            ) : (
              <span>{detail.value}</span>
            )}

            {index < data.content!.length - 1 && (
              <span style={{ color: 'var(--mantine-color-gold-7)' }}> • </span>
            )}
          </>
        ))}
      </Text>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          right: '64px',
          top: '36px',
        }}
      >
        <Button
          variant="outline"
          radius="xs"
          size="sm"
          style={{ width: '100%' }}
          component="a"
          href="mailto:sabine.rommevaux-tani@cnrs.fr"
        >
          Me Contacter
        </Button>
        <Button
          radius="xs"
          size="sm"
          style={{ width: '100%' }}
          component="a"
          href="/pdf-preview"
          target="_blank"
        >
          Télécharger mon CV
        </Button>
      </div>
    </>
  );
}
