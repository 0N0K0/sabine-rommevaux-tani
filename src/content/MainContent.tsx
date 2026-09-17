import { Tabs, Title } from '@mantine/core';
import { useDataFiles } from '../hooks/useDataFiles';
import { PanelContent } from './PanelContent';
import { IntroductionContent } from './IntroductionContent';

export function MainContent() {
  const { files, selected, data, loading, error, loadFile } = useDataFiles();

  if (loading && !data) return <p>Chargement...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <Tabs
      defaultValue="introduction"
      value={selected}
      onChange={(value) => {
        if (value) {
          loadFile(value);
        }
      }}
      style={{
        height: 'calc(100vh - 102px - 60px)',
      }}
    >
      <Tabs.List
        justify="center"
        style={{
          // position: 'sticky',
          // top: 0,
          // zIndex: 10,
          background: 'white',
        }}
      >
        <Tabs.Tab key="introduction" value="introduction">
          Introduction
        </Tabs.Tab>
        {files.map((file) => (
          <Tabs.Tab key={file.name} value={file.name}>
            {file.title}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      <Tabs.Panel
        key="introduction"
        value="introduction"
        px="64"
        py="48"
        style={{
          height: 'calc(100vh - 102px - 60px - 36px)',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
        }}
      >
        <IntroductionContent />
      </Tabs.Panel>
      {files.map((file) => (
        <Tabs.Panel
          key={file.name}
          value={file.name}
          px="64"
          py="48"
          style={{
            height: 'calc(100vh - 102px - 60px - 36px)',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '48px',
          }}
        >
          {loading ? (
            <p>Chargement...</p>
          ) : (
            <>
              <Title order={2}>{file.title}</Title>
              <PanelContent data={data} displayDates={file.displayDates} />
            </>
          )}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
