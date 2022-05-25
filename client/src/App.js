import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import HomePage from './Component/homePage';

function App() {
  const [tweets, fetchTweet] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch('http://localhost:6852/feed')
      .then((res) => {
        setLoading(true);
        return res.json();
      })
      .then((data) => {
        fetchTweet(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <HomePage tweets={tweets} loading={loading}></HomePage>
      <Outlet />
    </div>
  );
}

export default App;
