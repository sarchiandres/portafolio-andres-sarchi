
import { Routes, Route } from 'react-router-dom';
import { Container } from './components/Container/Container';
import { Home } from './components/pages/home/Home';
import { Header } from './components/Layouts/Header/Header';
function App() {
 
  return (
    <>
       <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
      </Container>
    </>
  )
}

export default App
