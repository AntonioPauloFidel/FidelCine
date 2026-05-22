import { createContext, useState, useCallback } from 'react'

const ToastContext = createContext({
  showToast: (msg) => {},
})

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const showToast = useCallback((message, duration = 3000) => {
    const id = Date.now().toString()
    setToasts((t) => [...t, { id, message }])
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id))
    }, duration)
  }, [])

  return (
    <ToastContext.Provider value={{ showToast, toasts, setToasts }}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastContext
