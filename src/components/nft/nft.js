import React, { useEffect, useState } from "react";
import "./nft.css";
import Header from "../header/header";

const NFTpage = () => {
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
    <div className="nft-base">
        <Header /> 
        <div className="super-super-card">
      <h1 className="all-nft-heading">All NFTs</h1>

      <div className="super-card">
        {data.map((record) => (
          <div className="card" key={record.nft.id}>
            <img src={record.denom.preview_uri} alt={record.nft.name} />

            <div className="container">
              <h4>{record.nft.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>   
    </div>
    
  );
};

export default NFTpage;
