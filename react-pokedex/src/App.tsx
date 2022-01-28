import { Route, Routes } from 'react-router-dom'
import Navbar from './layouts/NormalLayout'
import "../../common/app.css";
import Home from './views/Home';
import About from './views/About';
import Pokemon from './views/Pokemon';
import NotFound from './views/NotFound';
import NormalLayout from './layouts/NormalLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<NormalLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="pokemon/:id" element={<Pokemon />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App