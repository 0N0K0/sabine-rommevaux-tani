import { Anchor, Box, Stack, Text, Title } from '@mantine/core';
import { Layout } from '../layout/Layout';

export default function LegalNotices() {
  return (
    <Layout>
      <Box
        px={{
          base: '16px',
          sm: '32px',
          md: '64px',
        }}
      >
        <Stack
          gap="lg"
          style={{
            maxWidth: 'calc(1920px / 2)',
            marginInline: 'auto',
          }}
        >
          <Title order={2} style={{ textAlign: 'center' }}>
            Mentions légales
          </Title>
          <section className="legal-section">
            <Title order={3}>Éditeur du site</Title>

            <div className="legal-content">
              <Text>Raison sociale</Text>
              <Text>Onoko</Text>
              <Text>SIRET</Text>
              <Text>75152369700033</Text>
              <Text>Siège social</Text>
              <Text>
                2 rue des Charrettes
                <br />
                Lieu-dit Bens
                <br />
                63260 Chaptuzat - FRANCE
              </Text>
              <Text>Email</Text>
              <Anchor href="mailto:hello@onoko.dev">hello@onoko.dev</Anchor>
              <Text>Téléphone</Text>
              <Text>06 32 07 74 08</Text>
              <Text>Site internet</Text>
              <Anchor href="onoko.dev" target="_blank">
                onoko.dev
              </Anchor>
            </div>
          </section>

          <section className="legal-section">
            <Title order={3}>Directeur de publication</Title>
            <div className="legal-content">
              <Text></Text>
              <Text>Sabine Rommevaux-Tani</Text>{' '}
            </div>
          </section>

          <section className="legal-section">
            <Title order={3}>Hébergement</Title>

            <div className="legal-content">
              <Text>Hébergeur</Text>
              <Text>O2Switch</Text>
              <Text>Adresse</Text>
              <Text>
                Chemin des Pardiaux
                <br />
                63000 Clermont-Ferrand - FRANCE
              </Text>
            </div>
          </section>

          <section
            className="legal-section"
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <Title order={3}>Propriété intellectuelle</Title>
            <div>
              <Text>
                Le contenu de ce site, notamment les textes, images, graphismes,
                logos, icônes et éléments visuels, est protégé par les
                dispositions relatives à la propriété intellectuelle.
              </Text>
              <Text>
                Toute reproduction, représentation ou utilisation, totale ou
                partielle, sans autorisation préalable, est susceptible de
                constituer une violation des droits applicables.
              </Text>
            </div>
          </section>
        </Stack>
      </Box>
    </Layout>
  );
}
