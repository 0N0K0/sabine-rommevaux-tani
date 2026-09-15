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
    <AppShell header={{ height: 72 }} footer={{ height: 60 }}>
      <AppShell.Header>{headerContent}</AppShell.Header>
      <AppShell.Main
        style={{
          height: '100vh',
          overflowY: 'auto',
        }}
      >
        {mainContent}
      </AppShell.Main>
      <AppShell.Footer>{footerContent}</AppShell.Footer>
    </AppShell>
  );
}
