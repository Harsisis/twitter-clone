import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "name": `${username}`,
        "password": `${password}`
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:6852/signin/", requestOptions)
        .then(response => response.text())
        .then(result => handleResult(result))
        .catch(error => console.log('error', error));
    }

    function handleResult(result) {
        console.log(result);
        sessionStorage.setItem("token", JSON.parse(result)["token"]);
        navigate('/');
    }

    return(
        <div className="loginForm">
            <form onSubmit={handleSubmit} className="parent">
                <div className="div1">
                    <label htmlFor="username">login :</label>
                </div>
                <div className="div2">
                    <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)} name="userName"/> 
                </div>
                <div className="div3">
                    <label htmlFor="password">password :</label>
                </div>
                <div className="div4">
                    <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} name="password"/> 
                </div>
                <div className="div5">
                    <input className="submit-button" type="submit" value="Log in" />
                </div>
            </form>
        </div>
    );
}

export default Login;