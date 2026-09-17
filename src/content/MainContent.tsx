import { Tabs } from '@mantine/core';
import { useDataFiles } from '../hooks/useDataFiles';
import { PanelContent } from './PanelContent';

export function MainContent() {
  const { files, selected, data, loading, error, loadFile } = useDataFiles();

  if (loading && !data) return <p>Chargement...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <Tabs
      value={selected}
      onChange={(value) => {
        if (value) {
          loadFile(value);
        }
      }}
    >
      <Tabs.List
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        {files.map((file) => (
          <Tabs.Tab key={file.name} value={file.name}>
            {file.title}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {files.map((file) => (
        <Tabs.Panel key={file.name} value={file.name}>
          {loading ? (
            <p>Chargement...</p>
          ) : (
            <PanelContent data={data} displayDates={file.displayDates} />
          )}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
}
