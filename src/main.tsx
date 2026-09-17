import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './style.css';
import App from './App.tsx';
import { theme } from './theme/theme.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider
      classNamesPrefix="onoko"
      forceColorScheme="light"
      theme={theme}
    >
      <App />
    </MantineProvider>
  </StrictMode>,
);
