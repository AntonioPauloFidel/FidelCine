import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Favoritos from './pages/Favoritos.jsx'
import DetalhesFilme from './pages/DetalhesFilme.jsx'
import RotaProtegida from './routes/RotaProtegida.jsx'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/filme/:id" element={<DetalhesFilme />} />
        <Route element={<RotaProtegida />}>
          <Route path="/favoritos" element={<Favoritos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
