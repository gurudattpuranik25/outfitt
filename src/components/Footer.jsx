import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>Copyright &copy; 2023 - Gurudatt Puranik</p>
      <div className="social__icons">
        <a href="https://twitter.com/PuranikGurudatt">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/gurudatt-puranik-0933b0195/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://gurudattpuranik.hashnode.dev/">
          <i className="fa-brands fa-hashnode"></i>
        </a>
        <a href="https://github.com/gurudattpuranik25">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
