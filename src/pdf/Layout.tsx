import { Page } from '@react-pdf/renderer';
import { styles } from './style';
import { Header } from './Header';
import { Footer } from './Footer';
import type { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => (
  <Page size="A4" style={styles.page}>
    <Header />
    {children}
    <Footer />
  </Page>
);
