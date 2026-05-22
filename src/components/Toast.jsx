import { useContext } from 'react'
import ToastContext from '../contexts/ToastContext.jsx'

function Toast() {
  const { toasts } = useContext(ToastContext)

  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className="toast">{t.message}</div>
      ))}
    </div>
  )
}

export default Toast
