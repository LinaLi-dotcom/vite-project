import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleBar = () => {
  const percentage = 66; // Set the percentage value here

  return (
    <div className = "card"
    style={{ 
      maxWidth: '40%', // Limit width to prevent affecting layout
      maxHeight: '40%', // Limit height to prevent affecting layout
      overflow: 'auto' // Enable scrolling if content overflows
      }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
      />
    </div>
  );
};

export default CircleBar;
