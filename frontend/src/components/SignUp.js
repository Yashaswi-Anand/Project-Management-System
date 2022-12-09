import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { success } from '../Toast';
import { signup } from '../Utils/ApiUtils';
import '../style/signup.css';

function SignUp() {

    const [signUpData, setLogin] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate()

    const onHandleEvent = (event) => {
        setLogin({ ...signUpData, [event.target.name]: event.target.value, [event.target.name]: event.target.value })
        console.log(signUpData);
    }

    const onSignUp = async () => {
        console.log(signUpData);
        const apiResponce = await signup(signUpData)
        if (apiResponce.status === 200) {
            success(apiResponce.data.message)
            console.log("responcemessage", apiResponce.data.message);
            navigate('/login');
        } else {
            // success(apiResponce.data.message)
            console.log("error", apiResponce);
        }
    }

    return (
        <div>
            <div className='sidebar'>
                <img src='https://globalprimenews.com/wp-content/uploads/2022/09/IMG-20220908-WA0050.jpg' width='80%' height='80%' />
            </div>

            <div className='content'>
                <h2 className="my-5 fs-2 text-info">SIGNUP</h2>
                <form d-flex flex-column align-items-center >
                    <div>
                        <input
                            type='text'
                            name='email'
                            placeholder='Enter email'
                            onChange={(e) => onHandleEvent(e)}
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password"
                            onChange={(e) => onHandleEvent(e)}
                        />
                    </div>

                </form>
                <button className="button-style mt-3" onClick={() => onSignUp()}>
                    SIGNUP
                </button>
                <div>
                    <button className="button-style" onClick={() => navigate('/login')}>
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SignUp