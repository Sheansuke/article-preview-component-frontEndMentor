import React from "react";
import ReactDOM from "react-dom";

// STYLE
import "./index.scss";

// IMAGE
import image from "./images/drawers.jpg";

// COMPONENTS
import Article from "./components/Article/Article";

const title =
  "Shift the overall look and feel by adding these wonderful touches to furniture in your home";

const paragraph =
  "Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.";

ReactDOM.render(
  <React.StrictMode>
    <Article title={title} paragraph={paragraph} image={image} />
  </React.StrictMode>,
  document.getElementById("root")
);
