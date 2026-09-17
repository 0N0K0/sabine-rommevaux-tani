import { AppShell } from '@mantine/core';

interface LayoutProps {
  headerContent: React.ReactNode;
  mainContent: React.ReactNode;
  footerContent: React.ReactNode;
}
export function Layout({
  headerContent,
  mainContent,
  footerContent,
}: LayoutProps) {
  return (
    <AppShell header={{ height: 102 }} footer={{ height: 60 }}>
      <AppShell.Header
        px="64"
        py="16"
        style={{
          textAlign: 'center',
        }}
      >
        {headerContent}
      </AppShell.Header>
      <AppShell.Main
        style={{
          height: '100vh',
          overflowY: 'hidden',
        }}
      >
        {mainContent}
      </AppShell.Main>
      <AppShell.Footer px="xl">{footerContent}</AppShell.Footer>
    </AppShell>
  );
}
