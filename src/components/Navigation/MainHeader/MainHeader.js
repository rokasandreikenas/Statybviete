import React from "react";

import "./MainHeader.scss";
const MainHeader = ({ children }) => {
  return (
    <header className="main-header">
      <div className="container">{children}</div>
    </header>
  );
};

export default MainHeader;
