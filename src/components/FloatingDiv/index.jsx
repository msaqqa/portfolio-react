import React from 'react';
import "./style.css";
import { ThemeContext } from '../../context/theme';
import { useContext } from 'react';

function FloatingDiv({image, text1, text2}) {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className="floatingDiv">
        <img src={image} alt="" />
        <span style={{ color: darkMode ? "black" : "" }}>
            {text1}
            <br />
            {text2}
        </span>
    </div>
  )
}

export default FloatingDiv