import { FooterContent } from './content/FooterContent';
import { HeaderContent } from './content/HeaderContent';
import { MainContent } from './content/MainContent';
import { Layout } from './layout/layout';

/**
 * Root application component.
 * @returns {JSX.Element} App markup.
 */
function App() {
  return (
    <Layout
      headerContent={<HeaderContent />}
      mainContent={<MainContent />}
      footerContent={<FooterContent />}
    />
  );
}

export default App;
