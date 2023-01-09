import React, { useContext } from "react";
import "./style.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../FloatingDiv";
import { ThemeContext } from "../../context/theme";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

function Inro() {
  // context
  const { darkMode } = useContext(ThemeContext);
  // transition
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I'm</span>
          <span>Mahmoud</span>
          <span>
            Fontend developer with high level of experince in web designing and
            development, producting the quality work
          </span>
        </div>
        <a href="https://www.linkedin.com/in/ma-saqqa/" target="_blank">
          <button className="button i-button">Hire Me</button>
        </a>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* FloatingDiv mein change hy dark mode ka */}
          <FloatingDiv image={Thumbup} text1="Best Design" text2="Award" />
        </motion.div>
      </div>
    </div>
  );
}

export default Inro;
