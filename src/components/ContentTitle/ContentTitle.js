import React from "react";

import "./ContentTitle.scss";
const ContentTitle = ({ children }) => {
  return (
    <header className="content-title">
      <p>{children}</p>
    </header>
  );
};

export default ContentTitle;
