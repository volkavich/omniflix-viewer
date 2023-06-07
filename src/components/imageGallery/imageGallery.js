import React, { useEffect, useState } from "react";
import "./imageGallery.css";

const ImageGallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://data-api.omniflix.studio/listings?statuses%5B%5D=LISTED&verified=true&ipInfringement=false&sortBy=created_at&order=desc&limit=10"
    )
      .then((res) => res.json())
      .then((d) => {
        const list = d.result.list;
        setData(list);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="hightlight-text">Highlights</h1>
      <body className="body-root">
        <div className="slider">
          <div className="slide-track">
            {data.map((record) => (
              <div className="slide container" key={record.nft.id}>
                <img
                  src={record.denom.preview_uri}
                  alt={record.nft.name}
                  className="image"
                />

                <div className="overlay">{record.nft.name}</div>
              </div>
            ))}
          </div>
        </div>
      </body>
    </div>
  );
};

export default ImageGallery;
