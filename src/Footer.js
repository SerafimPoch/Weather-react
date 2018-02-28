import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div>
          <figure>
            <a href="https://github.com/SerafimPoch">
              <img
                src="https://octodex.github.com/images/dojocat.jpg"
                alt="my github account"
                className="github"
              />
            </a>
            <figcaption>My GitHub</figcaption>
          </figure>
        </div>
      </div>
    </footer>
  );
};
