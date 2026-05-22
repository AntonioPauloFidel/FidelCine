import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { FavoritosProvider } from './contexts/FavoritosContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <FavoritosProvider>
          <App />
        </FavoritosProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
