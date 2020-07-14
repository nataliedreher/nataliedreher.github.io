import React from 'react';
import "semantic-ui-css/semantic.min.css";
import { Image } from 'semantic-ui-react'
import { Parallax, Background } from 'react-parallax';
import BGImage from "../../images/344_243_1558895986144635898004111912095(2).jpg"


function Main() {
  return (
    <Parallax bgImage={BGImage} bgImageSizes="100%"
      renderLayer={percentage => (
        <div>
          <h1 style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: (240 / (6 * percentage * percentage)) - 80,
            zIndex: 100
          }}>Natalie Dreher</h1>
        </div>
      )}
    >
      <div style={{ height: "100vh", position: "relative" }} />
    </Parallax>
  );

}

export default Main;