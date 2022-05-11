import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react'

import ProfilCard from '../ProfilCard'

function Profil() {
    let params = useParams();

    const [userProfil, fetchUserProfil] = useState([]);

    const getData = () => {
        fetch(`http://localhost:6852/users/${params.name}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            fetchUserProfil(data)
        })
    }

    useEffect(() => {
        getData(userProfil)
    }, [userProfil])
    
    return(
        <div>
            <ProfilCard name={userProfil.name} 
            username={userProfil.username} 
            profilePicture={userProfil.profilePicture} 
            tweets={userProfil.tweets}></ProfilCard>
        </div>
    );
}

export default Profil;