import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import ArtPiece from "./ArtPiece";

function App() {
  const [art, setArt] = useState([]);
  useEffect(() => {
    const apiKey = `J2tX2aPj`;
    axios({
      method: "GET",
      url: `https://www.rijksmuseum.nl/api/en/collection`,
      dataResponse: "json",
      params: {
        key: apiKey,
        format: "json",
        hasImage: true,
      },
    }).then((response) => {
      setArt(response.data.artObjects);
    });
  }, []);
  return (
    <div className="app">
      <h1> Dutch Art Wall</h1>
      <h2 className="from">From Rijksmuseum API</h2>
      <section>
        {art.map((artwork) => {
          return (
            <ArtPiece
              key={artwork.id}
              alt={artwork.title}
              title={artwork.longTitle}
              imagePath={artwork.webImage.url}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
