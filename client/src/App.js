import HomePage from './Component/homePage';
import React, { useState, useEffect } from 'react'

function App() {

  const [tweets, fetchTweet] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = () => {
        fetch('http://localhost:6852/feed')
        .then((res) => {
            setLoading(true)
            return res.json();
        })
        .then((data) => {
            console.log(data)
            fetchTweet(data)
            setLoading(false)
        })
    }

    useEffect(() => {
        getData()
    }, [])

  return (
    <HomePage tweets={tweets} loading={loading}></HomePage>
  );
}

export default App;
