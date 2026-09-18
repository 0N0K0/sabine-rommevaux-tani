import { StrictMode } from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './style.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import MentionsLegales from './pages/MentionsLegales.tsx';
import { theme } from './theme/theme.ts';
import { PdfPreview } from './pages/PdfPreview.tsx';

const path = window.location.pathname;

const Page =
  path === '/mentions-legales'
    ? MentionsLegales
    : path === '/pdf-preview'
      ? PdfPreview
      : App;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider
      classNamesPrefix="onoko"
      forceColorScheme="light"
      theme={theme}
    >
      <Page />
    </MantineProvider>
  </StrictMode>,
);
