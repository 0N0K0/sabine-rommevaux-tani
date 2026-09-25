import { Page } from '@react-pdf/renderer';
import { styles } from '../style';
import { Header } from './Header';
import { Footer } from './Footer';
import type { ReactNode } from 'react';

export const Layout = ({
  header,
  children,
}: {
  header: Boolean;
  children: ReactNode;
}) => (
  <Page size="A4" style={styles.page}>
    {header && <Header />}
    {children}
    <Footer />
  </Page>
);
