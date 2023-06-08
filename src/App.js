import "./App.css";
import Hero from "./components/hero/hero";
import Loading from "./components/loading/loading";
import LoginPage from "./components/login/login";
import NFTpage from "./components/nft/nft";
import NFTDetails from "./components/nftDetails/nftDetails";

import { GrazProvider, mainnetChains } from "graz";

function App() {
  return (
    <GrazProvider
      grazOptions={{
        defaultChain: mainnetChains.cosmoshub,
      }}
    >
      <div className="App">
        <LoginPage />
        <Loading />
        <Hero />
        <NFTpage />
        <NFTDetails />
      </div>
    </GrazProvider>
  );
}

export default App;
