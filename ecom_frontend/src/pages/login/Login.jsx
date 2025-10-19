import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../authSlice';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const {IsLoading,error} = useSelector((state)=>state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(loginUser(credentials)).then((res)=>{
      if(res.meta.requestStatus === 'fulfilled') {
        alert("login succuccesfully")
        navigate('/')}
    })
  }

  return (
    <div>
      <h3>Login</h3>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={(e)=>setCredentials({...credentials, email: e.target.value})}/>
        <input type="password" placeholder="Password" onChange={(e)=>setCredentials({...credentials, password: e.target.value})}/>
        <button type="submit">{IsLoading ? "Logging in..." : "Login"}</button>
      </form>
    </div>
  );
};

export default Login;
