import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import AuthContext from '../contexts/AuthContext.jsx'

function RotaProtegida() {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}

export default RotaProtegida
