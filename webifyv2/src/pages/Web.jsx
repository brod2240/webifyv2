import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRelatedArtists } from '../actions/auth';

const Web = () => {
  const { state } = useLocation();

  useEffect(() => {
    getRelatedArtists(state.artist_id, state.access_token);
  });


  return (
    <div>Web</div>
  )
}

export default Web;