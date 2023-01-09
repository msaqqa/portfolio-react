import React from 'react';
import "./style.css";

function Card({emoji, heading, details, color}) {
  return (
    <div className='card' style={{borderColor: {color}}}>
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{details}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card