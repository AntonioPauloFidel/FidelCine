import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { FavoritosProvider } from './contexts/FavoritosContext.jsx'
import { ToastProvider } from './contexts/ToastContext.jsx'
import Toast from './components/Toast.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <FavoritosProvider>
          <ToastProvider>
            <App />
            <Toast />
          </ToastProvider>
        </FavoritosProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>,
)
