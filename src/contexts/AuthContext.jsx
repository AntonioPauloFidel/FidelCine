import { createContext, useState, useEffect } from 'react'

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user')
    if (!storedUser) return null

    try {
      return JSON.parse(storedUser)
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  const login = (name) => {
    setUser({ name })
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
