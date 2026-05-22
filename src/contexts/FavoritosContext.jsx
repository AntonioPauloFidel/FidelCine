import { createContext, useState, useEffect } from 'react'

const FavoritosContext = createContext({
  favoritos: [],
  adicionarFavorito: () => {},
  removerFavorito: () => {},
  isFavorito: () => false,
})

export function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState(() => {
    const stored = localStorage.getItem('favoritos')
    if (!stored) return []
    try {
      return JSON.parse(stored)
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
  }, [favoritos])

  const adicionarFavorito = (filme) => {
    setFavoritos((prev) => {
      if (prev.some((f) => String(f.id) === String(filme.id))) return prev
      return [...prev, filme]
    })
  }

  const removerFavorito = (id) => {
    setFavoritos((prev) => prev.filter((f) => String(f.id) !== String(id)))
  }

  const isFavorito = (id) => favoritos.some((f) => String(f.id) === String(id))

  return (
    <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito, isFavorito }}>
      {children}
    </FavoritosContext.Provider>
  )
}

export default FavoritosContext
