import { Text, View } from '@react-pdf/renderer';
import { styles } from './style';
import { useEffect, useState } from 'react';
import type { Data } from '../types/data';

export function Header() {
  const [data, setData] = useState<Data>({});

  useEffect(() => {
    async function loadHeader() {
      const response = await fetch('/data/header.json', {
        cache: 'no-store',
      });

      if (!response.ok) {
        throw new Error('Impossible de charger header.json');
      }

      const content: Data = await response.json();

      setData(content);
    }

    loadHeader();
  }, []);

  return (
    <View style={styles.header} fixed>
      <Text style={styles.headerText}>{data.title}</Text>
    </View>
  );
}
