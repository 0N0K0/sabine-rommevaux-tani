import { Burger, Drawer, Scroller, Stack, Tabs, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useLocation } from 'react-router-dom';

export function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
  const location = useLocation();

  return (
    <>
      <Tabs value={location.pathname} visibleFrom="sm">
        <Tabs.List justify="center">
          <Scroller draggable>
            <Tabs.Tab
              key="introduction"
              value="/"
              renderRoot={(props) => <a href="/" {...props} />}
            >
              Introduction
            </Tabs.Tab>
          </Scroller>
        </Tabs.List>
      </Tabs>

      <Burger
        opened={opened}
        onClick={open}
        hiddenFrom="sm"
        aria-label="Ouvrir le menu"
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
        }}
      />

      <Drawer opened={opened} onClose={close} hiddenFrom="sm" position="right">
        <Stack gap="lg" p="md">
          <Text
            component="a"
            href={`/`}
            fw={location.pathname === '/' ? 600 : 400}
            c={location.pathname === '/' ? 'gold' : 'inherit'}
            td="none"
            onClick={close}
          >
            Accueil
          </Text>
        </Stack>
      </Drawer>
    </>
  );
}
