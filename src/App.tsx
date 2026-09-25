import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useFiles } from './hooks/useFiles';
import Page from './pages/Page';
import { PdfPreview } from './pages/PdfPreview';
import LegalNotices from './pages/LegalNotices';

function App() {
  const files = useFiles();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {files.map((file, index) => {
          const slug = file.name;

          return (
            <Route
              key={file.name}
              path={`/${slug}`}
              element={<Page file={file} index={index} />}
            />
          );
        })}

        <Route path="/pdf-preview" element={<PdfPreview />} />
        <Route path="/legal-notices" element={<LegalNotices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
