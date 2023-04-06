import React, { useState, useEffect } from "react";

const Register = () => {
  const API = "http://localhost:3000";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setFailure(true);
      setTimeout(() => {
        setFailure(false);
      }, 3000); // set timeout for 3 seconds
      return;
    }

    const data = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch(`${API}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      console.log(responseData);

      // Set success status to true
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000); // set timeout for 3 seconds

      // Clear input fields after registration is successful
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {success && <p className="register-message">Registration successful</p>}
      {failure && <p className="register-message2">Passwords do not match</p>}

      <form className="loginpage" onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
          type="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <input type="submit" value="Register"></input>
        <p>
          <span>Already have and account?</span> <a href="#/login">Login</a>
        </p>
      </form>
    </>
  );
};

export default Register;
