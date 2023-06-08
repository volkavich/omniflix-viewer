import "./header.css";
import { useActiveChain, useAccount,  useDisconnect } from "graz";

function Header() {
  const { data: account } = useAccount();
  const { disconnect } = useDisconnect();
  const activeChain = useActiveChain();

  return (
    <div>
      <header className="navbar">
        <img src="/OmniLogo.svg" alt="logo" className="omni-header-logo"></img>
        <ul>
          <li className="home">
            <a href="">Home</a>
          </li>
          <li className="nfts">
            <a href="">NFTs</a>
          </li>
        </ul>
        <div className="user">
          <div className="user-icon">
            <img src="/User.svg" alt="userlogo" className="user-logo"></img>
          </div>
          <div className="user-details">
            <p><b>Account Name: </b>{account?.name} </p>
          </div>
          <div id="subMenu" className="dropdown" >
            <div className="dropdown-text">
            <p><b>Account Address: </b>{account?.bech32Address}</p>
            <p><b>Active Chain: </b>{activeChain?.chainId}</p>
            </div>
            <div className="for-disconnect">
            <button className="disconnect" onClick={() => (disconnect())} >Disconnect</button>
            </div>
            
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
