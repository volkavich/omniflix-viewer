import "./header.css";
import { useActiveChain, useAccount, useDisconnect } from "graz";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const { data: account } = useAccount();
  const { disconnect } = useDisconnect();
  const activeChain = useActiveChain();

  const navigate = useNavigate();

  return (
    <div>
      <header className="navbar">
        <img src="/OmniLogo.svg" alt="logo" className="omni-header-logo"></img>
        <ul>
          <Link to="/home">
            <li className="home list">Home</li>
          </Link>
          <Link to="/nfts">
            <li className="nfts list">NFTs</li>
          </Link>
        </ul>
        <div className="user">
          <div className="user-icon">
            <img src="/User.svg" alt="userlogo" className="user-logo"></img>
          </div>
          <div className="user-details">
            <p>
              <b>Account Name: </b>
              {account?.name}{" "}
            </p>
          </div>
          <div id="subMenu" className="dropdown">
            <div className="dropdown-text">
              <p>
                <b>Account Address: </b>
                {account?.bech32Address}
              </p>
              <p>
                <b>Active Chain: </b>
                {activeChain?.chainId}
              </p>
            </div>
            <div className="for-disconnect">
              <button
                className="disconnect"
                onClick={() => {
                  disconnect();
                  navigate("/");
                }}
              >
                Disconnect
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
