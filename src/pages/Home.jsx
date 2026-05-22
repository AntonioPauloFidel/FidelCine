import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/movies.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Falha ao carregar os filmes.')
        }
        return response.json()
      })
      .then((data) => {
        setMovies(data)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return (
    <main>
      <h1>Home</h1>
      <p>Veja a lista de filmes disponíveis e clique para ver os detalhes.</p>

      {loading && <p>Carregando filmes...</p>}
      {error && <p className="error-message">{error}</p>}

      {!loading && !error && (
        <div className="movie-grid">
          {movies.map((movie) => (
            <Link key={movie.id} to={`/filme/${movie.id}`} className="movie-card">
              <img
                src={movie.poster}
                alt={movie.title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h2 className="movie-title">{movie.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}

export default Home
