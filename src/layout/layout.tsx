import { AppShell, Tabs, Text, Title } from '@mantine/core';
import { FooterContent } from './footer';
import { HeaderContent } from './header';

export function Layout() {
  return (
    <AppShell header={{ height: 72 }} footer={{ height: 60 }} padding="md">
      <AppShell.Header>
        <HeaderContent />
      </AppShell.Header>
      <AppShell.Main>
        <Title order={2}>Domaines de recherche</Title>
        <Text>
          Histoire des mathématiques du Moyen Âge latin et de la Renaissance :
          la réception des Eléments d’Euclide, en particulier la théorie des
          proportions ; l’algèbre
        </Text>
        <Text>
          Histoire de la philosophie naturelle au Moyen Âge latin : la tradition
          des Calculatores d’Oxford (XIVe siècle) ; l’utilisation des
          mathématiques dans cette tradition
        </Text>
        <Text>
          Histoire de la philosophie médiévale latine : la philosophie
          mathématique de Raoul le Breton
        </Text>
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Formation</Tabs.Tab>
            <Tabs.Tab value="tab2">Activités professionnelles</Tabs.Tab>
            <Tabs.Tab value="tab3">Responsabilités collectives</Tabs.Tab>
            <Tabs.Tab value="tab4">Activités liées à la recherche</Tabs.Tab>
            <Tabs.Tab value="tab5">Activités liées à l'édition</Tabs.Tab>
            <Tabs.Tab value="tab6">Distinctions</Tabs.Tab>
            <Tabs.Tab value="tab7">Encadrement doctoral</Tabs.Tab>
            <Tabs.Tab value="tab8">Conférences grand public</Tabs.Tab>
            <Tabs.Tab value="tab9">Enseigement et formation</Tabs.Tab>
            <Tabs.Tab value="tab10">Production scientifique</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">
            <Text>Contenu 1</Text>
          </Tabs.Panel>
          <Tabs.Panel value="tab2">
            <Text>Contenu 2</Text>
          </Tabs.Panel>
        </Tabs>
      </AppShell.Main>
      <AppShell.Footer>
        <FooterContent />
      </AppShell.Footer>
    </AppShell>
  );
}
