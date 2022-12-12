import React, { useEffect, useState } from 'react';
import { spotifyAuth } from '../actions/auth';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Typed from 'react-typed';

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
        e.preventDefault();
        spotifyAuth();
    }
  return (
    <>
     <Wrapper>
        <Title><Typed strings={["Get Great Artist Recommendations", "with", "Webify"]} typeSpeed={50} backSpeed={50} /></Title>
        <Button onClick={e => clicked(e)}>login</Button>
        { !token ? navigate('/') : navigate('/home')}
      </Wrapper>
    </>
  )
}

const Button = styled.button`
      width: 6rem;
      height: 3rem;
      background-color: #1DB954;
      color: white;
      border-radius: 10px;
      font-size: 1rem;
      cursor: pointer;
      font-family: "GothamRounded-Medium";
      transition: all 500ms ease;
      border: none;

      &:hover {
        cursor: pointer;
        color: #1DB954;
        border: #1DB954 solid 2px;
        background: transparent;
      }
`;

const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;

`;

const Title = styled.h1`

    color: white;
    font-family: "GothamRounded-Bold";
    font-size: 3rem;
    text-align: center;

  @keyframes blink {
    0% {
      opacity: 100%;
    }

    50% {
      opacity: 0%;
    }
  }
`;


export default Landing;