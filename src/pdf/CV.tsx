import { Document } from '@react-pdf/renderer';
import { Cover } from './Cover';
import { Content } from './Content';

export const CV = () => (
  <Document>
    <Cover />
    <Content />
  </Document>
);
