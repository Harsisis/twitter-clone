import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './utils/AuthorizationHook';

function CreateTweet() {
  const [body, setBody] = useState('');

  const navigate = useNavigate();
  
  const [cookie] = useAuth();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (sessionStorage.getItem('token') == null) {
      alert(`Your session has expired`);
      navigate('/login');
    } else {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${cookie}`);
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        body: body,
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch('http://localhost:6852/tweets/', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="tweet-form">
        <textarea onChange={(e) => setBody(e.target.value)}></textarea>
        <input className="submit-button" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default CreateTweet;
