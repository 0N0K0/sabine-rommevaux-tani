import { AppShell, Tabs, Text, Title } from '@mantine/core';
import { FooterContent } from './footer';
import { HeaderContent } from './header';
import { useDataFiles } from '../hooks/useDataFiles';

export function Layout() {
  const { files, selected, data, loading, error, loadFile } = useDataFiles();

  if (error) {
    return <p>Erreur : {error.message}</p>;
  }

  return (
    <>
      {files.map((file) => (
        <button key={file} onClick={() => loadFile(file)}>
          {file}
        </button>
      ))}

      {loading && <p>Chargement...</p>}

      {selected && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </>
    // <AppShell header={{ height: 72 }} footer={{ height: 60 }} padding="md">
    //   <AppShell.Header>
    //     <HeaderContent />
    //   </AppShell.Header>
    //   <AppShell.Main>
    //     <Tabs defaultValue="tab1">
    //       <Tabs.List>
    //         <Tabs.Tab value="tab1">Formation</Tabs.Tab>
    //         <Tabs.Tab value="tab2">Activités professionnelles</Tabs.Tab>
    //         <Tabs.Tab value="tab3">Responsabilités collectives</Tabs.Tab>
    //         <Tabs.Tab value="tab4">Activités liées à la recherche</Tabs.Tab>
    //         <Tabs.Tab value="tab5">Activités liées à l'édition</Tabs.Tab>
    //         <Tabs.Tab value="tab6">Distinctions</Tabs.Tab>
    //         <Tabs.Tab value="tab7">Encadrement doctoral</Tabs.Tab>
    //         <Tabs.Tab value="tab8">Conférences grand public</Tabs.Tab>
    //         <Tabs.Tab value="tab9">Enseigement et formation</Tabs.Tab>
    //         <Tabs.Tab value="tab10">Production scientifique</Tabs.Tab>
    //       </Tabs.List>
    //       <Tabs.Panel value="tab1">
    //         <pre>{data}</pre>
    //       </Tabs.Panel>
    //       <Tabs.Panel value="tab2">
    //         <Text>Contenu 2</Text>
    //       </Tabs.Panel>
    //     </Tabs>
    //   </AppShell.Main>
    //   <AppShell.Footer>
    //     <FooterContent />
    //   </AppShell.Footer>
    // </AppShell>
  );
}
