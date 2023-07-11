import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../App.css';

export default function Services() {
  const history = useHistory();

  const handleButtonClick = () => {
    // Redirect to another website
    window.location.href = 'https://shivansh1203.github.io/Shivansh1203-Calibriya-E-Library-Project/';
  };

  return (
    <div className='services'>
      <button className='big-button' onClick={handleButtonClick}>
        Go to Tech Event Website
      </button>
    </div>
  );
}
