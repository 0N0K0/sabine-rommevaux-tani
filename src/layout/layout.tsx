import { AppShell, Tabs, Text, Title } from '@mantine/core';
import { FooterContent } from './footer';
import { HeaderContent } from './header';
import { useDataFiles } from '../hooks/useDataFiles';

export function Layout() {
  const { files, selected, data, loading, error, loadFile } = useDataFiles();

  if (loading && !data) return <p>Chargement...</p>;

  if (error) return <p>{error.message}</p>;

  console.log(files);

  return (
    // <>
    //   {files.map((file) => (
    //     <button key={file} onClick={() => loadFile(file)}>
    //       {file}
    //     </button>
    //   ))}

    //   {loading && <p>Chargement...</p>}

    //   {selected && <pre>{JSON.stringify(data, null, 2)}</pre>}
    // </>
    <AppShell header={{ height: 72 }} footer={{ height: 60 }}>
      <AppShell.Header>
        <HeaderContent />
      </AppShell.Header>
      <AppShell.Main
        style={{
          height: '100vh',
          overflowY: 'auto',
        }}
      >
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
                <pre>{JSON.stringify(data, null, 2)}</pre>
              )}
            </Tabs.Panel>
          ))}
        </Tabs>
      </AppShell.Main>
      <AppShell.Footer>
        <FooterContent />
      </AppShell.Footer>
    </AppShell>
  );
}
