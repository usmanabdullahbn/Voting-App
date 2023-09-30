import React from "react";
import "./Footer.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-section">
      <h1
        className="my-name"
        style={{ fontFamily: "Poppins, sans-serif", margin: 0, fontWeight: "bolder"}}
      >
        Voting App
      </h1>
      <p
        className="footer-text"
        style={{ fontFamily: "Times New Roman", margin: 0, fontSize: "14px" }}
      >
        Empowering student voices in shaping our school's future! Every vote
        matters. Exercise your right to choose our student leaders.
      </p>
      <div className="social-links"
      style={{padding: 0}}>
        <a
          href="mailto:usmanabdullahbn@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/usman-abdullah-061a3623a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/usmanabdullahbn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/usmanabdullahbn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <p style={{ fontFamily: "Times New Roman", margin: 0, fontSize: "12px" }}>
        © Copyright VotingApp. All Rights Reserved
      </p>
      <p style={{ fontFamily: "Times New Roman", margin: 0, fontSize: "12px" }}>
        Develop by UsmanAbdullah
      </p>
    </div>
  );
};

export default Footer;
