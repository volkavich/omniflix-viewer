import "./loading.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="base">
      <div>
        <img src="/OmniLogo.svg" alt="OmniLogo" className="logo"></img>
      </div>
      <div className="message">
        <img src="/KeplrLogo.svg" alt="KeplrLogo" className="keplr-logo"></img>
        <img src="/Wait.svg" alt="Waiting" className="loading-logo"></img>
        <p className="text">
          Approve connection request on the Keplr window...
        </p>
      </div>
    </div>
  );
}

export default Loading;
