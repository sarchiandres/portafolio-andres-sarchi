import { Routes, Route } from 'react-router-dom';
import { Container } from './components/Container/Container';
import { Home } from './components/pages/home/Home';
import { Header } from './components/Layouts/Header/Header';
import { Skills } from './components/pages/skills/Skills';

import { Dowload } from './components/Layouts/DowloadCurriculum/Dowload';  // Verifica la ruta del archivo
import { Projects } from './components/pages/Projects/Projects';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Download" element={<Dowload />} />  
        </Routes>
      </Container>
    </>
  );
}

export default App;
