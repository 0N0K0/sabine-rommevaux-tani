import { Document } from '@react-pdf/renderer';
import { Layout } from './Layout';
import { Cover } from './Cover';

export const CV = () => (
  <Document>
    <Layout>
      <Cover />
    </Layout>
  </Document>
);
