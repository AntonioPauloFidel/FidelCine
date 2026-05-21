import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../contexts/ThemeContext.jsx'

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header className="app-header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
      <button type="button" onClick={toggleTheme}>
        {theme === 'claro' ? 'Modo Escuro' : 'Modo Claro'}
      </button>
    </header>
  )
}

export default Header
