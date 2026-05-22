import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const key = import.meta.env.VITE_OMDB_API_KEY
    if (!key) {
      setError('Chave OMDb não configurada. Crie um arquivo .env.local com VITE_OMDB_API_KEY.')
      setLoading(false)
      return
    }

    const query = 'star wars'
    fetch(`https://www.omdbapi.com/?apikey=${key}&s=${encodeURIComponent(query)}&type=movie`)
      .then((res) => {
        if (!res.ok) throw new Error('Falha ao buscar filmes na OMDb.')
        return res.json()
      })
      .then((data) => {
        if (data?.Response !== 'True' || !Array.isArray(data.Search)) {
          throw new Error(data.Error || 'Nenhum filme encontrado na OMDb.')
        }
        setMovies(data.Search)
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => setLoading(false))
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
            <Link key={movie.imdbID} to={`/filme/${movie.imdbID}`} className="movie-card">
              <img
                src={movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=Sem+imagem'}
                alt={movie.Title}
                className="movie-poster"
              />
              <div className="movie-info">
                <h2 className="movie-title">{movie.Title}</h2>
                <p>{movie.Year}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  )
}

export default Home
