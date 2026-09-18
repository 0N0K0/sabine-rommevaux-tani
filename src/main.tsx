import { StrictMode } from 'react';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './style.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import { theme } from './theme/theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
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
