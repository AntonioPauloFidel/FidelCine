import { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import FavoritosContext from '../contexts/FavoritosContext.jsx'
import ToastContext from '../contexts/ToastContext.jsx'

function DetalhesFilme() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const key = import.meta.env.VITE_OMDB_API_KEY
    if (!key) {
      setError('Chave OMDb não configurada. Crie um arquivo .env.local com VITE_OMDB_API_KEY.')
      setLoading(false)
      return
    }

    fetch(`https://www.omdbapi.com/?apikey=${key}&i=${encodeURIComponent(id)}&plot=full`)
      .then((res) => {
        if (!res.ok) throw new Error('Falha ao buscar detalhes do filme na OMDb.')
        return res.json()
      })
      .then((data) => {
        if (data?.Response !== 'True') {
          throw new Error(data.Error || 'Filme não encontrado na OMDb.')
        }

        setMovie({
          title: data.Title,
          poster: data.Poster && data.Poster !== 'N/A' ? data.Poster : 'https://via.placeholder.com/300x450?text=Sem+imagem',
          director: data.Director,
          cast: data.Actors,
          plot: data.Plot,
          imdbID: data.imdbID,
        })
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
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
