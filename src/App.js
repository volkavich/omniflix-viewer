import "./App.css";
import Hero from "./components/hero/hero";
import Loading from "./components/loading/loading";
import LoginPage from "./components/login/login";
import NFTpage from "./components/nft/nft";
import NFTDetails from "./components/nftDetails/nftDetails";

function App() {
  return (
    <div className="App">
      <LoginPage/>
      <Loading/>
      <Hero/>
      <NFTpage/>
      <NFTDetails/>
    </div>
  );
}

export default App;
