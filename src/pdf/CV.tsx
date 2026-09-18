import { Document } from '@react-pdf/renderer';
import { Cover } from './Cover';
import { Content } from './Content';

interface CVProps {
  onRender?: () => void;
}

export const CV = ({ onRender }: CVProps) => (
  <Document onRender={onRender}>
    <Cover />
    <Content />
  </Document>
);
