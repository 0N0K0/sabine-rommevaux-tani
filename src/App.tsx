import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import MentionsLegales from './pages/MentionsLegales';
import { PdfPreview } from './pages/PdfPreview';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/pdf-preview" element={<PdfPreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
