import React, { useState } from 'react';

const Login = (props) => {
  const API = "http://localhost:3000";

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


  const handleLogin = async (e) => {
    e.preventDefault();
  
    // Fetch user data from JSON database file
    await fetch(`${API}/users`)
      .then(response => response.json())
      .then(data => {
  
        // Find matching user in database
        const user = data.find(user => user.username === username && user.password === password);
        if (user) {
          const userToSave = { username: user.username, email: user.email };
          localStorage.setItem('user', JSON.stringify(userToSave));
          props.handleLoginSuccess();
          setMessage('Successful login');
  
          // Set a timeout for the message to disappear after 3 seconds
          setTimeout(() => {
            setMessage('');
          }, 3000);
  
          window.location.href = '#/dashboard';
        }
        else {
          setMessage('Invalid username or password');
  
          // Set a timeout for the message to disappear after 3 seconds
          setTimeout(() => {
            setMessage('');
          }, 3000);
        }
      })
      .catch(error => {
        setMessage('Error: ' + error.message);
  
        // Set a timeout for the message to disappear after 3 seconds
        setTimeout(() => {
          setMessage('');
        }, 3000);
      });
  };
  
  
  
  

  return (
    <div>
      {message && (
        <p className={`login-message ${message.startsWith('Successful') ? 'login-message--success' : 'login-message--error'}`}>
          {message}
        </p>
      )}
      <form className='loginpage' onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="username" maxLength={20} placeholder="Username" value={username} onChange={e => setUsername(e.target.value)}/>
        <input type="password" maxLength={20} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
        <input type="submit" value="Login"/>
        <p><span>Don't have an account?</span> <a href='#/register'>Register</a></p>
      </form>
    </div>
  );
};

export default Login;
