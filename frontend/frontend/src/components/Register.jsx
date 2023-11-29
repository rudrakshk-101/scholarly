import React from 'react'
import './Form.css'

const Register = () => {
  return (
    <div className='container'>
      <div class="form-container">
	<p class="title">REGISTER</p>
	<div class="form">
		<div class="input-group">
			<label for="username">Username</label>
			<input type="text" name="username" id="username" placeholder="" />
		</div>
		<div class="input-group">
			<label for="gmail">Gmail</label>
			<input type="text" name="gmail" id="gmail" placeholder="" />
		</div>
		<div class="input-group">
			<label for="password">Password</label>
			<input type="password" name="password" id="password" placeholder="" />
		</div>
		<button class="sign">Register</button>
	</div>
	<div class="social-message">
	</div>
	
	<p class="signup">Have an account? &nbsp;
		<a>Login</a>
	</p>
</div>
    </div>
  )
}

export default Register
