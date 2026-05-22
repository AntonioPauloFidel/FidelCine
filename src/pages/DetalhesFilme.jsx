import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import FavoritosContext from '../contexts/FavoritosContext.jsx'
import ToastContext from '../contexts/ToastContext.jsx'
import movies from '../data/movies.js'

function DetalhesFilme() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const found = movies.find((m) => String(m.id) === String(id))
    if (!found) {
      setError('Filme não encontrado')
      setLoading(false)
      return
    }
    setMovie(found)
    setLoading(false)
  }, [id])

  if (loading) return <main><p>Carregando...</p></main>
  if (error) return <main><p className="error-message">{error}</p></main>

  const { adicionarFavorito, removerFavorito, isFavorito } = useContext(FavoritosContext)
  const { showToast } = useContext(ToastContext)

  const favorito = movie ? isFavorito(movie.id) : false

  function handleToggleFavorito() {
    if (!movie) return
    if (favorito) {
      removerFavorito(movie.id)
      showToast('Filme removido dos favoritos')
    } else {
      adicionarFavorito(movie)
      showToast('Filme adicionado aos favoritos')
    }
  }

  return (
    <main>
      <h1>{movie.title}</h1>
      <div className="details">
        <img src={movie.poster} alt={movie.title} className="movie-poster" />
        <div className="movie-meta">
          <p><strong>Diretor:</strong> {movie.director || '—'}</p>
          <p><strong>Elenco:</strong> {Array.isArray(movie.cast) ? movie.cast.join(', ') : (movie.cast || '—')}</p>
          <p><strong>Sinopse:</strong> {movie.plot || movie.description || 'Sem sinopse disponível.'}</p>
          <button type="button" onClick={handleToggleFavorito}>
            {favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
          </button>
        </div>
      </div>
    </main>
  )
}

export default DetalhesFilme
