import React from "react";

const index = () => {
  return (
    <footer>
      <div className="flex-row center ">
        <div className="mx-2">
          <a
            href="https://github.com/nomioh"
            type="button"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="instagram"
              src="https://img.icons8.com/ios-filled/50/000000/github.png"
            />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/noyemiohanyan/"
            type="button"
            target="_blank"
            rel="noreferrer"
          >
            <img
              alt="linkedin"
              src="https://img.icons8.com/ios-filled/50/000000/linkedin-circled--v2.png"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default index;
