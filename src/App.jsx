import { Routes, Route } from 'react-router-dom';
import { Container } from './components/Container/Container';
import { Home } from './components/pages/home/Home';
import { Header } from './components/Layouts/Header/Header';
import { Skills } from './components/pages/skills/Skills';
import { Contact } from './components/pages/Contact/Contac';
import { Dowload } from './components/Layouts/DowloadCurriculum/Dowload';  // Verifica la ruta del archivo

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Download" element={<Dowload />} />  {/* Ruta de descarga */}
        </Routes>
      </Container>
    </>
  );
}

export default App;
