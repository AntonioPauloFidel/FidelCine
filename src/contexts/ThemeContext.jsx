import { createContext, useState, useEffect } from 'react'

const ThemeContext = createContext({
  theme: 'claro',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('claro')

  useEffect(() => {
    document.body.dataset.theme = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'claro' ? 'escuro' : 'claro'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
