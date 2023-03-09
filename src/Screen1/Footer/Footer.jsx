import React from "react";
import { FiTriangle, FiCircle } from "react-icons/fi";
import { BiRectangle } from "react-icons/bi";

// CSS
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-conteiner">
      <FiTriangle className="triangle" size={10} />
      <FiCircle className="circle" size={10} />
      <BiRectangle className="rectangle" size={10} />
    </div>
  );
}

export default Footer;
