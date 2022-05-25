import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../utils/AuthorizationHook';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      name: `${username}`,
      password: `${password}`,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch('http://localhost:6852/signin/', requestOptions)
      .then((response) => response.json())
      .then((result) => handleResult(result))
      .catch((error) => console.log('error', error));
  };

  function handleResult(result) {
    setLoading(false);
    auth[1](result['token']);
    navigate('/');
  }

  return (
    <div className="loginForm">
      <form onSubmit={handleSubmit} className="parent">
        <div className="div1">
          <label htmlFor="username">login :</label>
        </div>
        <div className="div2">
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="userName"
          />
        </div>
        <div className="div3">
          <label htmlFor="password">password :</label>
        </div>
        <div className="div4">
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
        </div>
        <div className="div5">
        {!loading ? <input id="submitButton" className="submit-button" type="submit" value="Log in" /> : ''}
        </div>
      </form>
    </div>
  );
}

export default Login;
