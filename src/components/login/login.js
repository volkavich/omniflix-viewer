import "./login.css";
import { useConnect } from "graz";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  window.onload = async () => {
    document.querySelector("video").play();
  };

  const navigate = useNavigate();

  const { connect } = useConnect();

  return (
    <div className="root">
      <div className="right">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster=""
          className="right-video"
        >
          <source src="/UltimateVideoCollage.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="left">
        <div className="inner-left">
          <div>
            <img
              src="/OmniLogo.svg"
              alt="Omni-Logo"
              className="login-logo"
            ></img>
            <p className="caption">
              Create, Manage, Distribute & Monetize Media Assets
            </p>
          </div>

          <button
            className="login-button"
            onClick={() => {
              !window.keplr
                ? alert(
                    "Please install keplr extension to start using this app"
                  )
                : connect();
              !window.keplr
                ? window.open("https://www.keplr.app/", "_blank")
                : navigate("/loading");
            }}
          >
            <span className="login-text">
              <img
                src="/KeplrLogo.svg"
                alt="keplr-Logo"
                className="KeplrButtonLogo"
              ></img>
              Connect With Keplr
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
