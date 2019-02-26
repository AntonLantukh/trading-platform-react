import React from 'react';
import './style.css';

const ErrorIndicator = ({error}) =>  {
  return(
    <div className="error">
      <p>Oops! Error Occurred</p>
      <p>{error}</p>
    </div>
  )
};

export default ErrorIndicator;
