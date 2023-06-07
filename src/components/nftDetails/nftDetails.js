import { useEffect, useState } from "react";
import "./nftDetails.css";
import Header from "../header/header";

function NFTDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://data-api.omniflix.studio/listings?statuses%5B%5D=LISTED&verified=true&ipInfringement=false&sortBy=created_at&order=desc&limit=1"
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
        <Header />
      <div className="details-base">
        <div className="details-left">
          {data.map((record) => (
            <div>
              <div className="left-image-div">
              <img
                src={record.denom.preview_uri}
                alt={record.nft.name}
                className="details-image"
              />
              </div>
              <div className="left-discription-div">
              <p>
                <b>Name:</b> {record.nft.name}
              </p>
              <p>
                <b>Denom Name:</b> {record.denom.name}
              </p>
              <p>{record.denom.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="details-right">
            {
                data.map((record) => (
                    <div>
                        <div className="right-details-div">
                            <p><b>_id: </b>{record._id}</p>
                            <p><b>Created At: </b>{record.created_at}</p>
                            <p><b>Updated At: </b>{record.updated_at}</p>
                            <p><b>Transferable: </b>{record.nft.transferable ? "True" : "False"}</p>
                            <p><b>Owner: </b>{record.nft.owner}</p>
                            <p><b>Creator: </b>{record.nft.creator}</p>
                            <p><b>Media_URI: </b> <a href={record.nft.media_uri} rel="noreferrer" target="_blank" className="a-link"> {record.nft.media_uri} </a></p>
                            <p><b>Denom Symbol: </b>{record.denom.symbol}</p>
                            <p><b>NFT_id: </b>{record.nft_id}</p>
                            <p><b>DENOM_id: </b>{record.denom_id}</p>
                            <p><b>Denom: </b>{record.price.denom}</p>
                            <p><b>Amount: </b>{record.price.amount}</p>
                            <p><b>Fiat Price in USD: </b>{record.fiat_price.usd} USD /-</p>
                            <p><b>Fiat Price in INR: </b>{record.fiat_price.inr} INR /-</p>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}

export default NFTDetails;
