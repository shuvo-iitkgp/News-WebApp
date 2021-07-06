import './Footer.css'
import React from 'react'

const Footer = () => {
    return (
      <div className="footer">
        <span className="name">
          Inshorts clone made by -{" "}
          <a href="https://www.linkedin.com/in/subhajitb2002/" target="__blank">
            Subhajit Bag
          </a>
        </span>
        <hr style={{ width: "90%" }} />
        <div className="iconContainer">
          <a href="https://www.instagram.com/shuvo_der_eroberer/" target="__blank">
            <i className="fab fa-instagram-square fa-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/subhajitb2002/" target="__blank">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/shuvo-iitkgp" target="__blank">
          <i class="fab fa-github-square fa-2x" ></i>
          </a>
          <a href="https://twitter.com/SubhajitB98" target="__blank">
          <i class="fab fa-twitter fa-2x"></i>
          </a>
        </div>
      </div>
    );
  };
  
  export default Footer;