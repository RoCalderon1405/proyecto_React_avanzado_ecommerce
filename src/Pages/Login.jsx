import React from 'react'
import { useContext } from 'react'
import logo from '../Assets/logo.svg'
import useForm from '../Hook/useForm'
import { useNavigate } from 'react-router-dom'
import { loginUserServices } from '../Services/userServices'
import { AuthContext } from '../context/AuthContext'
import '../Assets/CSS/form.css'


const Login = () => {
  const navigate = useNavigate()
  const { loginUser } = useContext(AuthContext)

  const sendData = async (data) => {
    try {
      const result = await loginUserServices(data)
      // console.log(result.data.token)
      if (result.status === 200) {
        loginUser(result.data.token)
        navigate('/')
      }
    } catch (err) {
      console.log('Ocurrió un error en Login: ' + err.message)
    }
  }
  const { input, handleSubmit, handleInputChange } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <>
      <main className='form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit}>
          <div className='d-flex justify-content-center'>
            <img src={logo} alt='logo'  />
          </div>
          <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>
          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='floatingEmail'
              name='email'
              placeholder='name@example.com'
              value={input.email}
              onChange={handleInputChange}
            />
            <label htmlFor='floatingEmail'>Email address</label>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              name='password'
              placeholder='Password'
              value={input.password}
              onChange={handleInputChange}
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign in</button>
          <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
        </form>
      </main>

    </>
  )
}

export default Login