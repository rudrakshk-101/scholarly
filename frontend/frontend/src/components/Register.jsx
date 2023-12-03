import {useNavigate} from 'react-router-dom'
import React, { useState } from "react";
import './Form.css'

const Register = () => {
	const navigateTo = useNavigate();
	const [username,setUsername] = useState('');
	const [password,setPassword] = useState('');
	const [gmail,setGmail] = useState('');
	const [error,setError] = useState('');
	const handleRegister = async() => {
		const response = await fetch('https://scholarlybackend.adaptable.app/register',{
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify({username,gmail,password})
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
    <div className='container'>
      <div class="form-container">
	<p class="title">REGISTER</p>
	<div class="form">
	<div class="input-group">
            <label for="username">Username</label>
            <input type="text" name="username" value={username} onChange={(e)=> {
				setUsername(e.target.value);
			}} id="username" placeholder="" />
          </div>
		<div class="input-group">
			<label for="gmail">Gmail</label>
			<input type="text" value={gmail} onChange={(e)=> {
				setGmail(e.target.value);
			}} name="gmail" id="gmail" placeholder="" />
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
		<button class="sign" onClick={() => {handleRegister()}}>Register</button>
	</div>
	<div class="social-message">{error}</div>
	
	<p class="signup">Have an account? &nbsp;
		<a onClick={()=> {
			navigateTo('/login')
		}}>Login</a>
	</p>
</div>
    </div>
  )
}

export default Register
