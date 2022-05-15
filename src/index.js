import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
// import SimpleImageGallery from "./Gallery";
import DynamicGallery from "./DynamicColumn";
import Lightbox from "react-images";

function App() {
  return (
    <div className="App">
      <h1>Prity And Aman Gallery</h1>
      <h2>Photo gallery marriage</h2>
      <DynamicGallery />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
