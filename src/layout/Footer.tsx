import { Anchor, Grid, Text } from '@mantine/core';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Grid.Col span={{ base: 6, sm: 4 }} order={{ base: 2, sm: 1 }}>
        <Text size="xs" style={{ textWrap: 'balance' }}>
          ©2026{currentYear !== 2026 ? `-${currentYear}` : ''} Sabine
          Rommevaux&#8209;Tani Tous&nbsp;droits&nbsp;réservés.
        </Text>
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 4 }} order={{ base: 1, sm: 2 }}>
        <Anchor
          href="/legal-notices"
          style={{ textAlign: 'center', width: '100%', display: 'block' }}
        >
          Mentions légales
        </Anchor>
      </Grid.Col>
      <Grid.Col span={{ base: 6, sm: 4 }} order={3}>
        <Text size="xs" style={{ textAlign: 'right', textWrap: 'balance' }}>
          Site réalisé par{' '}
          <Anchor href="https://onoko.dev" target="_blank">
            Onoko
          </Anchor>
        </Text>
      </Grid.Col>
    </>
  );
}
