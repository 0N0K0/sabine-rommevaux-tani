import { Text, Title } from '@mantine/core';
import { FooterContent } from '../content/FooterContent';
import { HeaderContent } from '../content/HeaderContent';
import { Layout } from '../layout/layout';

export default function MentionsLegales() {
  return (
    <Layout
      headerContent={<HeaderContent />}
      mainContent={
        <div
          style={{
            height: 'calc(100vh - 144px - 60px)',
            overflow: 'auto',
            padding: '48px 64px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              maxWidth: 'calc(1920px / 4 * 3)',
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
                  2 rue des Charrettes, Lieu-dit Bens, 63260 Chaptuzat - FRANCE
                </Text>
                <Text>Email</Text>
                <Text>hello@onoko.dev</Text>
                <Text>Téléphone</Text>
                <Text>06 32 07 74 08</Text>
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
                <Text>Chemin des Pardiaux 63000 Clermont-Ferrand - FRANCE</Text>
              </div>
            </section>

            <section
              className="legal-section"
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <Title order={3}>Propriété intellectuelle</Title>
              <div>
                <Text>
                  Le contenu de ce site, notamment les textes, images,
                  graphismes, logos, icônes et éléments visuels, est protégé par
                  les dispositions relatives à la propriété intellectuelle.
                </Text>
                <Text>
                  Toute reproduction, représentation ou utilisation, totale ou
                  partielle, sans autorisation préalable, est susceptible de
                  constituer une violation des droits applicables.
                </Text>
              </div>
            </section>
          </div>
        </div>
      }
      footerContent={<FooterContent />}
    />
  );
}
