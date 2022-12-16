import React from 'react';
import { useLocation } from 'react-router-dom';

const Web = () => {
  const { state } = useLocation();
  return (
    <div>Web</div>
  )
}

export default Web;