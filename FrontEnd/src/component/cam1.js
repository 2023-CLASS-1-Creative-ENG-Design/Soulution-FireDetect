import React from "react";
import "../styles/style.css";

const Cam1 = () => {
  return (
    <video src="rtsp://ip-adress:port/"></video>
  );
};

const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <img className="union" alt="Union" src={require("../assets/union.svg").default} />
        <img className="union-4" alt="Union" src={require("../assets/union-4.svg").default} />
        <div className="overlap-group">
          <img className="recicon" alt="Recicon" src={require("../assets/recicon.svg").default} />
        </div>
        <img className="union-2" alt="Union" src={require("../assets/union-3.svg").default} />
      </div>
      <Cam1 />
    </div>
  );
};

export default Desktop;
