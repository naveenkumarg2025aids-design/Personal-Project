import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CustomerLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    navigate('/dashboard')
  }

  return (
    <section className="w-full max-w-sm">
      <h1 className="mb-2 text-2xl font-semibold text-gray-900">
        Bike Rental System
      </h1>
      <p className="mb-6 text-base text-gray-700">
        Customer Login
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm text-gray-800"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            className="w-full rounded border border-gray-400 px-3 py-2 text-base outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="mb-1 block text-sm text-gray-800"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="w-full rounded border border-gray-400 px-3 py-2 text-base outline-none focus:border-blue-600"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-blue-600 px-5 py-2 text-base text-white hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </section>
  )
}

export default CustomerLogin
