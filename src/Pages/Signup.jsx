import React from 'react'
import logo from '../Assets/logo.svg'
import useForm from '../Hook/useForm'
import { useNavigate } from 'react-router-dom'
import { registerUserServices } from '../Services/userServices'
import '../Assets/CSS/form.css'

const Signup = () => {
  const navigate = useNavigate()

  const sendData = async (data) => {
    console.log(data)
    try {
      const result = await registerUserServices(data)
      if (result.status === 200) {
        navigate('/login')
      }
    } catch (err) {
      console.log('Ocurrió un error en Signup: ' + err.message)
    }
  }

  const { input, handleSubmit, handleInputChange } = useForm(sendData,
    {
      first_name: '',
      last_name: '',
      gender: '',
      email: '',
      password: ''
    })

  return (
    <>
      <main className='form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit}>
          <div className='d-flex justify-content-center'>
            <img className='mb-4' src={logo} alt='' />
          </div>
          <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='first_name'
              name='first_name'
              placeholder='John'
              value={input.first_name}
              onChange={handleInputChange}
            />
            <label htmlFor='first_name'>First Name</label>
          </div>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='last_name'
              name='last_name'
              placeholder='Doe'
              value={input.last_name}
              onChange={handleInputChange}
            />
            <label htmlFor='last_name'>Last Name</label>
          </div>

          <div className='form-floating'>
            <select
              className='form-select'
              id='gender'
              name='gender'
              value={input.gender}
              onChange={handleInputChange}
            >
              <option value=''>Choose...</option>
              <option value='M'>Male</option>
              <option value='F'>Female</option>
            </select>
            <label htmlFor='gender'>Gender</label>
          </div>

          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              placeholder='name@example.com'
              value={input.email}
              onChange={handleInputChange}
            />
            <label htmlFor='email'>Email address</label>
          </div>

          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              placeholder='Password'
              value={input.password}
              onChange={handleInputChange}
            />
            <label htmlFor='password'>Password</label>
          </div>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign Up</button>
          <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
        </form>
      </main>

    </>
  )
}

export default Signup