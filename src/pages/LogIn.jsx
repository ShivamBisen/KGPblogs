import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {

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
      <section className='login'>
        <div className="login_container">
          <h1>Log In</h1>
          <form action="" className="form-register">
            {/* <p className="form_error-message">This is an Error message</p> */}
            <input type="text" placeholder='Fullname' name='name' value={userData.name} onChange={changeInputHandler} className='form-input-register'/>
            <input type="text" placeholder='Password'  name='name' value={userData.password} onChange={changeInputHandler} className='form-input-register'/>
            <button className='btn primary'>Log In</button>
          </form>
          <small>Creat an Account <Link to='/Register'>Sign Up</Link></small>
          
        </div>

      </section>
    </div>
  )
}

export default LogIn
