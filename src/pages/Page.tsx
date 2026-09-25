import { Layout } from '../layout/Layout';
import type { Data, File } from '../types/data';
import { Stack, Title } from '@mantine/core';
import { arabesques } from '../constants/assets';
import { PanelContent } from '../components/PanelContent';
import { useFile } from '../hooks/useFile';

export default function Page({ file, index }: { file: File; index: number }) {
  const { data, loading, error } = useFile(file.name);

  const arabesque = arabesques[index % arabesques.length];

  if (loading && !data) return null;

  if (error) return <p>{error.message}</p>;

  return (
    <Layout>
      {loading ? null : (
        <>
          <Stack gap="8px">
            <Title order={2} style={{ textAlign: 'center' }}>
              {file.title}
            </Title>
            <img
              src={arabesque}
              alt=""
              style={{
                height: '24px',
              }}
            />
          </Stack>
          <PanelContent
            data={data as Data[]}
            displayDates={file.displayDates}
          />
          <img
            src={arabesque}
            alt=""
            style={{
              height: '32px',
            }}
          />
        </>
      )}
    </Layout>
  );
}
