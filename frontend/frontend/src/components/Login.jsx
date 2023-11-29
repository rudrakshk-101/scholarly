import React from 'react'
import './Form.css'

const Login = () => {
  return (
    <div className='container'>
      <div class="form-container">
	<p class="title">LOGIN</p>
	<div class="form">
		<div class="input-group">
			<label for="username">Username</label>
			<input type="text" name="username" id="username" placeholder="" />
		</div>
		<div class="input-group">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" placeholder="" />
		</div>
		<button class="sign">Sign in</button>
	</div>
	<div class="social-message">
	</div>
	
	<p class="signup">Don't have an account? &nbsp;
		<a>Sign up</a>
	</p>
</div>
    </div>
  )
}

export default Login
