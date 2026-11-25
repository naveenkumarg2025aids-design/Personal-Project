import { Link } from 'react-router-dom'

function CustomerDashboard() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h1 className="mb-2 text-2xl font-semibold text-slate-900">
        Customer Dashboard
      </h1>
      <p className="mb-6 text-slate-600">
        Welcome to your bike rental dashboard.
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          to="/bikes"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          View Available Bikes
        </Link>
        <Link
          to="/bookings"
          className="rounded-md border border-blue-600 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50"
        >
          View My Bookings
        </Link>
      </div>
    </section>
  )
}

export default CustomerDashboard
