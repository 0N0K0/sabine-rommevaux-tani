import { useState } from 'react';
import { Center, Loader } from '@mantine/core';
import { PDFViewer } from '@react-pdf/renderer';
import { CV } from '../pdf/CV';

export const PdfPreview = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div
      style={{
        position: 'relative',
        height: 'calc(100vh - 10px)',
        width: '100%',
      }}
    >
      {loading && (
        <Center
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        >
          <Loader />
        </Center>
      )}

      <PDFViewer
        style={{
          height: '100%',
          width: '100%',
        }}
      >
        <CV onRender={() => setLoading(false)} />
      </PDFViewer>
    </div>
  );
};
