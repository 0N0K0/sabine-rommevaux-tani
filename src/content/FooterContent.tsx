import { Anchor, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

export function FooterContent() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Text size="xs">
        ©2026{currentYear !== 2026 ? currentYear : ''} Sabine Rommevaux-Tani
        Tous droits réservés.
      </Text>
      <Anchor
        component={Link}
        to="/mentions-legales"
        style={{ textAlign: 'center' }}
      >
        Mentions légales
      </Anchor>
      <Text size="xs" style={{ textAlign: 'right' }}>
        Site réalisé par{' '}
        <Anchor component={Link} to="https://onoko.dev" target="_blank">
          Onoko
        </Anchor>
      </Text>
    </>
  );
}
