import {useNavigate} from 'react-router-dom'
import React, { useState } from "react";
import "./Form.css";

const Login = () => {
	const navigateTo = useNavigate();
	const [username,setUsername] = useState('');
	const [password,setPassword] = useState('');
	const [error,setError] = useState('');
	const handleLogin = async () => {
		const response = await fetch('http://localhost:4500/login',{
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify({username,password})
		});
		const data = await response.json();
		if(data.token)
		{
			localStorage.setItem('token',data.token);
			navigateTo('/');
		}
		else
		{
			setError(data.message);
		}
	}
  return (
    <div className="container">
      <div class="form-container">
        <p class="title">LOGIN</p>
        <div class="form">
          <div class="input-group">
            <label for="username">Username</label>
            <input type="text" name="username" value={username} onChange={(e)=> {
				setUsername(e.target.value);
			}} id="username" placeholder="" />
          </div>
          <div class="input-group">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
			  value={password}
			  onChange={(e)=> {
				setPassword(e.target.value);
			  }}
              id="password"
              placeholder=""
            />
          </div>
          <button class="sign" onClick={() => {handleLogin()}}>Sign in</button>
        </div>
        <div class="social-message">{error}</div>

        <p class="signup">
          Don't have an account? &nbsp;
          <a onClick={() => {
			navigateTo('/register')
		  }}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
