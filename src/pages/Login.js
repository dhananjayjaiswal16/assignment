import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/services/api';
import loginImg from "../loginImg.svg"
import Spinner from '../components/Spinner';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isFetching = useSelector(state => state.isFetching)
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, { email, password });
  }
  if (isFetching) {
    return <Spinner />;
  }
  return (
    <>
      <div className="login-container">
        <div className="content">
          <h2>Login</h2>
          <form onSubmit={handleClick}>
            <div className="input-bar">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="name"
                placeholder="Username"
              />

            </div>
            <div className="input-bar">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="password"
                placeholder="Password"
              />

            </div>
            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login;
