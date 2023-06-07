import "./header.css"

function Header() {
    return (
        <div>
            <header className="navbar">
                <img src="/OmniLogo.svg" alt="logo" className="omni-header-logo"></img>
                <ul>
                    <li className="home"><a href="">Home</a></li>
                    <li className="nfts"><a href="">NFTs</a></li>
                    
                </ul>
                <div className="user">
                    <img src="/User.svg" alt="userlogo" className="user-logo"></img>
                    <p>Account:</p>
                </div>
            </header>
        </div>
    );
}

export default Header;