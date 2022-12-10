import React, { useEffect, useState } from 'react'
import { spotifyAuth } from '../actions/auth';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const [ token, setToken ] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      const hash = window.location.hash;
      if (hash) {
        setToken(hash.substring(1).split("&")[0].split('=')[1]);
      }
    }, []);

    const clicked = (e) => {
        console.log("button clicked");
        e.preventDefault();
        spotifyAuth();
    }
  return (
    <>
        <div>landing</div>
        <button onClick={e => clicked(e)}>login</button>
        { !token ? navigate('/') : navigate('/home')}
    </>
  )
}


export default Landing;