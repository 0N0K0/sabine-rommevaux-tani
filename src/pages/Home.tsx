import { FooterContent } from '../content/FooterContent';
import { HeaderContent } from '../content/HeaderContent';
import { MainContent } from '../content/MainContent';
import { Layout } from '../layout/layout';

export default function Home() {
  return (
    <Layout
      headerContent={<HeaderContent />}
      mainContent={<MainContent />}
      footerContent={<FooterContent />}
    />
  );
}
