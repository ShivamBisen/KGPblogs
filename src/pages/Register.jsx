import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  const [userData,setuserData]=useState({
    name:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const changeInputHandler =(e) =>{
    setuserData(prevState =>{
      return{...prevState,[e.target.name]:e.target.value}
    })

  }

  return (
    <div>
      <section className='register'>
        <div className="register_container">
          <h1>Sign Up</h1>
          <form action="" className="form-register">
            {/* <p className="form_error-message">This is an Error message</p> */}
            <input type="text" placeholder='Fullname' name='name' value={userData.name} onChange={changeInputHandler} className='form-input-register'/>
            <input type="text" placeholder='Email'  name='name' value={userData.email} onChange={changeInputHandler} className='form-input-register'/>
            <input type="text" placeholder='Password'  name='name' value={userData.password} onChange={changeInputHandler} className='form-input-register'/>
            <input type="text" placeholder='Confirm Password'  name='name' value={userData.confirmPassword} onChange={changeInputHandler} className='form-input-register'/>
            <button className='btn primary'>Register</button>
          </form>
          <small>Already have an accout? <Link to='/login'>Sign in</Link></small>
          
        </div>

      </section>
    </div>
  )
}

export default Register
