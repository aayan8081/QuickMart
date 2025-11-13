import { FiAlertTriangle } from 'react-icons/fi'

const ErrorBanner = ({ message }) => {
  if (!message) return null

  return (
    <div className="error-banner">
      <FiAlertTriangle />
      <span>{message}</span>
    </div>
  )
}

export default ErrorBanner

