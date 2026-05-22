import { useContext } from 'react'
import { Link } from 'react-router-dom'
import FavoritosContext from '../contexts/FavoritosContext.jsx'
import ToastContext from '../contexts/ToastContext.jsx'

function Favoritos() {
  const { favoritos, removerFavorito } = useContext(FavoritosContext)
  const { showToast } = useContext(ToastContext)

  return (
    <main>
      <h1>Favoritos</h1>
      {favoritos.length === 0 ? (
        <p>Lista de favoritos vazia.</p>
      ) : (
        <div className="movie-grid">
          {favoritos.map((movie) => (
            <div key={movie.id} className="movie-card">
              <Link to={`/filme/${movie.id}`}>
                <img src={movie.poster} alt={movie.title} className="movie-poster" />
                <div className="movie-info">
                  <h2 className="movie-title">{movie.title}</h2>
                </div>
              </Link>
              <div style={{ padding: '0 1rem 1rem' }}>
                <button
                  type="button"
                  onClick={() => {
                    removerFavorito(movie.id)
                    showToast('Filme removido dos favoritos')
                  }}
                >
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}

export default Favoritos
