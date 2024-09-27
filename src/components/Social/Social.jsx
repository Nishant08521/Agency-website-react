import React from "react";
import "./Social.css";

const Social = () => {
  return (
    <div className="social">
      <div className="social-email">
        <h1>agency@email.com</h1>
        <img src="" alt="" />
      </div>
      <div className="social-links">
        <div className="social-link">
          <a className="instagram" href="https://www.instagram.com/?hl=en">
            Instagram
          </a>
          <a className="linkedin" href="https://www.linkedin.com/feed/">
            LinkedIn
          </a>
        </div>
        <div className="social-link2">
          <a className="vimeo" href="https://vimeo.com/">
            Vimeo
          </a>
          <a className="behance" href="https://www.behance.net/">
            Behance
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
