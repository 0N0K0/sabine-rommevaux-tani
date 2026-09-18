import { PDFViewer } from '@react-pdf/renderer';
import { CV } from '../pdf/CV';

export const PdfPreview = () => (
  <PDFViewer
    style={{
      height: '100vh',
      width: '100vw',
    }}
  >
    <CV />
  </PDFViewer>
);
