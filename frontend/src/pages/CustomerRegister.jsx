import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../components/formschema/registerschema'
import { useNavigate } from 'react-router-dom'

function CustomerRegister() {
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(registerSchema)
  })

  function onSubmit(data) {
    console.log(data)
    alert('Registration successful!')
    navigate('/login')
  }

  return (
    <section className="w-full max-w-sm">
        <section className="w-full max-w-sm">
  <h1 className="mb-2 text-2xl font-semibold">
    Customer Registration
  </h1>

  <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
    <div>
      <label>Full Name</label>
      <input {...register('name')} className="w-full rounded border p-2" />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}
    </div>

    <div>
      <label>Email</label>
      <input {...register('email')} className="w-full rounded border p-2" />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
    </div>

    <div>
      <label>Phone Number</label>
      <input {...register('phone')} className="w-full rounded border p-2" />
      {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
    </div>

    <div>
      <label>Date of Birth</label>
      <input type="date" {...register('dateOfBirth')} className="w-full rounded border p-2" />
      {errors.dateOfBirth && <p className="text-red-500">{errors.dateOfBirth.message}</p>}
    </div>

    <div>
      <label>Driving Licence Number</label>
      <input {...register('licenseNumber')} className="w-full rounded border p-2" />
      {errors.licenseNumber && <p className="text-red-500">{errors.licenseNumber.message}</p>}
    </div>

    <div>
      <label>Password</label>
      <input type="password" {...register('password')} className="w-full rounded border p-2" />
      {errors.password && <p className="text-red-500">{errors.password.message}</p>}
    </div>

    <div>
      <label>Confirm Password</label>
      <input type="password" {...register('confirmPassword')} className="w-full rounded border p-2" />
      {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
    </div>

    <button type="submit" className="rounded bg-blue-600 px-5 py-2 text-white">
      Register
    </button>
  </form>
</section>

    </section>
  )
}

export default CustomerRegister