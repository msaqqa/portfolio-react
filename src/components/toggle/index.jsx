import React, { useContext } from 'react';
import "./style.css"
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import { ThemeContext } from '../../context/theme';

function Toggle() {
  const { darkMode, changeTheme } = useContext(ThemeContext);
  const handleClick = () => {
    changeTheme();
  };
  return (
    <div className="toggle" onClick={handleClick}>
      <Moon />
      <Sun />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  )
}

export default Toggle