import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { success } from '../Toast';
import { login } from '../Utils/ApiUtils';
import '../style/login.css';

function Login() {
  const [signUpData, setLogin] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate()

  const onHandleEvent = (event) => {
    setLogin({ ...signUpData, [event.target.name]: event.target.value, [event.target.name]: event.target.value })
    console.log(signUpData);
  }

  const onSignIn = async () => {
    console.log(signUpData);
    const apiResponce = await login(signUpData)
    if (apiResponce.status === 200) {
      console.log("responcemessage", apiResponce);
      success(apiResponce.data.message)
    } else {
      console.log("error");
    }
  }

  return (
    <div>
      <div className='sidebar'>
        <img src='https://globalprimenews.com/wp-content/uploads/2022/09/IMG-20220908-WA0050.jpg' width='80%' height='80%' />
      </div>

      <div className='content'>
        <h2 className="my-5 fs-2 text-info">LOGIN</h2>
        <div>
          <form className="d-flex flex-column align-items-center ">
            <input
              type='text'
              name='email'
              placeholder='Enter email'
              onChange={(e) => onHandleEvent(e)}
            />

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={(e) => onHandleEvent(e)}
            />
          </form>
          <button className="button-style mt-3" onClick={() => onSignIn()}>
            LOGIN
          </button>
          <div>
            <button className="button-style" onClick={() => navigate('/')}>
              SIGNUP
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login