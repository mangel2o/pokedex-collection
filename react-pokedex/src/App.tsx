import { Route, Routes } from 'react-router-dom'
import "./styles/app.css";
import Home from './views/Home';
import About from './views/About';
import Pokemon from './views/Pokemon';
import NotFound from './views/NotFound';
import NavBar from './components/NavBar';

function App() {
  return (
    <Routes>
      <div className="app-layout">
        <NavBar />
        <div className="content">
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="pokemon/:id" element={<Pokemon />} />
          <Route path="*" element={<NotFound />} />
        </div>
      </div>


    </Routes>
  )
}

export default App