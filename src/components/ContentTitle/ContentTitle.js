import React from "react";

import "./ContentTitle.scss";

const ContentTitle = ({ children }) => {
  return (
    <header className="content-title">
      <div className="container">
        <p>{children}</p>
      </div>
    </header>
  );
};

export default ContentTitle;
