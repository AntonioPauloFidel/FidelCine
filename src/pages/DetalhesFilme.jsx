import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function DetalhesFilme() {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/movies.json')
      .then((res) => {
        if (!res.ok) throw new Error('Falha ao carregar os dados do filme.')
        return res.json()
      })
      .then((data) => {
        const found = data.find((m) => String(m.id) === String(id))
        if (!found) throw new Error('Filme não encontrado')
        setMovie(found)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <main><p>Carregando...</p></main>
  if (error) return <main><p className="error-message">{error}</p></main>

  return (
    <main>
      <h1>{movie.title}</h1>
      <div className="details">
        <img src={movie.poster} alt={movie.title} className="movie-poster" />
        <div className="movie-meta">
          <p><strong>Diretor:</strong> {movie.director || '—'}</p>
          <p><strong>Elenco:</strong> {Array.isArray(movie.cast) ? movie.cast.join(', ') : (movie.cast || '—')}</p>
          <p><strong>Sinopse:</strong> {movie.plot || movie.description || 'Sem sinopse disponível.'}</p>
          <button type="button">Adicionar aos favoritos</button>
        </div>
      </div>
    </main>
  )
}

export default DetalhesFilme
