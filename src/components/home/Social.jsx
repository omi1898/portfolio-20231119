import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="www.instgram.com"
        className="home__social-icon"
        target="_blank"
      >
       <i className="uil uil-instagram"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/panchalomprakash/"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/omi1898"
        className="home__social-icon"
        target="_blank" rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
