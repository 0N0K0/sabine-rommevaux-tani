import { Center, Loader } from '@mantine/core';
import { PDFViewer } from '@react-pdf/renderer';
import { CV } from '../pdf/CV';

export const PdfPreview = () => {
  return (
    <div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
      }}
    >
      <Center
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        <Loader />
      </Center>

      <PDFViewer
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
        }}
      >
        <CV />
      </PDFViewer>
    </div>
  );
};
