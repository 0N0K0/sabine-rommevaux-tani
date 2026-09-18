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
    <AppShell
      header={{
        height: '144',
      }}
      footer={{ height: 60 }}
    >
      <AppShell.Header
        px="64"
        py="32"
        style={{
          textAlign: 'center',
          border: 'none',
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
      <AppShell.Footer
        px="64"
        py="16"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          alignItems: 'center',
        }}
      >
        {footerContent}
      </AppShell.Footer>
    </AppShell>
  );
}
