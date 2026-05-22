import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext.jsx'

function Login() {
  const [name, setName] = useState('')
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    const trimmedName = name.trim()
    if (!trimmedName) return

    login(trimmedName)
    navigate('/')
  }

  return (
    <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nome
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Digite seu nome"
          />
        </label>
        <button type="submit">Entrar</button>
      </form>
    </main>
  )
}

export default Login
