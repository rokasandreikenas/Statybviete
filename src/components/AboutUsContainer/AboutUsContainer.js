import React from "react";
import "./AboutUsContainer.scss";
const AboutUsContainer = () => {
  return (
    <div className="about-section">
      <div className="inner-container">
        <h1>Apie mus</h1>
        <p className="text">
          Pasinaudodami patirtimi ir profesionalumu apdailos srityje,
          pasitelkdami technines naujoves ir tvarius statybos sprendimus
          įgyvendiname individualius projektus Vilniuje.
        </p>
        <div className="skills">
          <div className="first">
            <span>Eletros darbai</span>
            <span>Santechnikos darbai</span>
            <span>Sienų/Lubų darbai</span>
          </div>
          <div className="second">
            <span>Grindų klojimo darbai</span>
            <span>Plytelių klojimo darbai</span>
            <span>Kiti darbai</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContainer;
