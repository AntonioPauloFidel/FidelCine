import { Link } from 'react-router-dom'
import movies from '../data/movies.js'

function Home() {
  return (
    <main>
      <h1>Home</h1>
      <p>Veja a lista de filmes disponíveis e clique para ver os detalhes.</p>

      <div className="movie-grid">
        {movies.map((movie) => (
          <Link key={movie.id} to={`/filme/${movie.id}`} className="movie-card">
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
              <h2 className="movie-title">{movie.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Home
