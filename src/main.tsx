import { StrictMode } from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './style.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import MentionsLegales from './pages/MentionsLegales.tsx';
import { theme } from './theme/theme.ts';

const path = window.location.pathname;

const Page = path === '/mentions-legales' ? MentionsLegales : App;

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
