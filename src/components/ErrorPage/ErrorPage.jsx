import { Link } from 'react-router'

function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-emerald-900">
            404
          </h1>
        </div>
        
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        
        <Link 
          to="/" 
          className="inline-block px-8 py-3 bg-emerald-900 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-800 hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
