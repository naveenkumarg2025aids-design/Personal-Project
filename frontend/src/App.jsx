import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import AvailableBikes from './pages/AvailableBikes.jsx'
import CustomerDashboard from './pages/CustomerDashboard.jsx'
import CustomerLogin from './pages/CustomerLogin.jsx'
import MyBookings from './pages/MyBookings.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 text-slate-800">
        <header className="border-b border-slate-200 bg-white">
          <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4">
            <Link
              to="/dashboard"
              className="text-xl font-semibold text-blue-700"
            >
              Bike Rental
            </Link>
            <div className="flex flex-wrap gap-2 sm:gap-5">
              <Link
                to="/dashboard"
                className="rounded px-2 py-1 text-sm hover:text-blue-700"
              >
                Dashboard
              </Link>
              <Link
                to="/bikes"
                className="rounded px-2 py-1 text-sm hover:text-blue-700"
              >
                Available Bikes
              </Link>
              <Link
                to="/bookings"
                className="rounded px-2 py-1 text-sm hover:text-blue-700"
              >
                My Bookings
              </Link>
              <Link
                to="/login"
                className="rounded px-2 py-1 text-sm hover:text-blue-700"
              >
                Customer Login
              </Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-8">
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
    </BrowserRouter>
  )
}

export default App
