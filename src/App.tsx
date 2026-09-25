import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import LegalNotices from './pages/LegalNotices';
import Page from './pages/Page';
import { useFiles } from './hooks/useFiles';

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

        <Route path="/legal-notices" element={<LegalNotices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
