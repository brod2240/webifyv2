import React, { useState, useEffect } from 'react';
import { getTopArtists } from '../actions/auth';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { GiSpiderWeb } from 'react-icons/gi';
import { useNavigate }from 'react-router-dom';

const Home = () => {
  const [token, setToken] = useState('');
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setToken(hash.substring(1).split("&")[0].split('=')[1]);
      getTopArtists(token).then(function(result) {
        console.log(result);
        setArtists(result);
      })  
    }
  });


  return (
    <Wrapper>
        <motion.div 
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="info-artists"
        >
          {artists?.map(({ name, id, images }) => {
            return (
              <div key={id} className="info-item app__flex">
                <div className="info-img app__flex">
                  <img src={images[0].url} alt={name}/>
                  <motion.div
                    whileHover={{opacity: [0, 1]}}
                    transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                    className="info-hover app__flex" 
                  >
                    <a onClick={() => navigate('/web', {state: {artist_id: id}})}>
                      <motion.div
                        whileInView={{scale: [0, 1]}}
                        whileHover={{scale: [1, 0.9]}}
                        transition={{duration: 0.25}}
                        className="app__flex"
                      >
                        <GiSpiderWeb classNamr="icon"/>
                      </motion.div>
                    </a>
                  </motion.div>
                </div>
                <div className="info-content app__flex">
                  <h4 className="bold-text">{name}</h4>
                </div>
              </div>
            )
          })}
      </motion.div>
  </Wrapper>
  )
}

const Wrapper = styled.div`


      .info-artists {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        background-color: #212121;

        .info-item {
                width: 270px;
                flex-direction: column;
                padding: 1rem;
                margin: 2rem;
                border-radius: 0.5rem;
                background-color: #fff;
                color: #000;
        
                cursor: pointer;
                transition: all 0.3s ease;
        
                &:hover {
                    box-shadow: 0 0 25px rgba(0,0,0,0.2);
                }
        
                @media screen and (min-width: 2000px) {
                    width: 470px;
                    padding: 1.25rem;
                    border-radius: 0.75rem;
                }
        
                @media screen and (max-width: 300px) {
                    width: 100%;
                    margin: 1rem;
                }         
          }
      }  

      .info-img {
        width: 100%;
        height: 230px;
    
        position: relative;
    
        img {
            width: 100%;
            height: 100%;
            border-radius: 0.5rem;
            object-fit: cover;
        }
    
        @media screen and (min-width: 2000px) {
            width: 350px;
        }
      }

      .info-hover {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5) ;
    
        border-radius: 0.5rem;
        opacity: 0;
        transition: all 0.3s ease;
    
        div {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            color: #fff;
            margin: 1rem;
            font-family: var(--font-base);
            font-weight: 800;
            cursor: pointer;
            transition: all 0.3s ease;

            svg {
              width: 80%;
              height: 90%;
            }
        }
      }

      .info-content {
        padding: 0.5rem;
        width: 100%;
        position: relative;
        flex-direction: column;
    
        h4 {
            margin-top: 1rem;
            line-height: 1.5;
        }
      }

      .bold-text {
        font-size: 1rem;
        font-weight: 800;
        color: var(--black-color);
        text-align: left;
      
        @media screen and (min-width: 2000px) {
          font-size: 2rem;
        }
      
        @media screen and (max-width: 450px) {
          font-size: 0.9rem;
        }
      }

      .app-flex {
        display: flex;
        justify-content: center;
        align-items: center;
      }

`;

export default Home;