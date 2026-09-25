import { useEffect, useState } from 'react';
import type { Content, Data } from '../types/data';

export function useFile(fileName: string) {
  const [data, setData] = useState<Data[] | Data | Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadFile() {
      try {
        const response = await fetch(`/data/${fileName}.json`, {
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error(`Impossible de charger ${fileName}.json`);
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

    loadFile();
  }, [fileName]);

  return {
    data,
    loading,
    error,
  };
}
