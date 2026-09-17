import { useEffect, useState } from 'react';
import type { File, DataIndex, Data, Content } from '../types/data';

export function useDataFiles() {
  const [files, setFiles] = useState<File[]>([]);
  const [selected, setSelected] = useState<string>('introduction');
  const [data, setData] = useState<Data[] | Content[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function loadIndex() {
      try {
        const response = await fetch('/data/index.json', {
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error('Impossible de charger index.json');
        }

        const index: DataIndex = await response.json();

        setFiles(index.files);
      } catch (error) {
        setError(
          error instanceof Error ? error : new Error('Une erreur est survenue'),
        );
      } finally {
        setLoading(false);
      }
    }

    loadIndex();
  }, []);

  async function loadFile(file: string) {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`/data/${file}.json`, {
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error(`Impossible de charger ${file}.json`);
      }

      const json: Data[] | Content[] = await response.json();

      setSelected(file);
      setData(json);
    } catch (error) {
      setError(
        error instanceof Error ? error : new Error('Une erreur est survenue'),
      );
    } finally {
      setLoading(false);
    }
  }

  return {
    files,
    selected,
    data,
    loading,
    error,
    loadFile,
  };
}
