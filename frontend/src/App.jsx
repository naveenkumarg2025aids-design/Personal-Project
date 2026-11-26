import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import AvailableBikes from './pages/AvailableBikes.jsx'
import CustomerDashboard from './pages/CustomerDashboard.jsx'
import CustomerLogin from './pages/CustomerLogin.jsx'
import MyBookings from './pages/MyBookings.jsx'

function AppContent() {
  const { pathname } = useLocation()
  const isLoginPage = pathname === '/' || pathname === '/login'

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main
        className={
          isLoginPage
            ? 'flex min-h-screen items-center justify-center px-4 py-8'
            : 'mx-auto min-h-screen max-w-4xl px-4 py-8'
        }
      >
        {!isLoginPage && (
          <nav className="mb-8 flex flex-wrap gap-x-6 gap-y-2 border-b border-gray-200 pb-3 text-sm">
            <Link to="/dashboard" className="text-gray-700 hover:text-blue-700">
              Dashboard
            </Link>
            <Link to="/bikes" className="text-gray-700 hover:text-blue-700">
              Available Bikes
            </Link>
            <Link to="/bookings" className="text-gray-700 hover:text-blue-700">
              My Bookings
            </Link>
            <Link to="/login" className="text-gray-700 hover:text-blue-700">
              Customer Login
            </Link>
          </nav>
        )}

        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<CustomerLogin />} />
          <Route path="/dashboard" element={<CustomerDashboard />} />
          <Route path="/bikes" element={<AvailableBikes />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
