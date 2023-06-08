import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/hero/hero";
import Loading from "./components/loading/loading";
import LoginPage from "./components/login/login";
import NFTpage from "./components/nft/nft";
import NFTDetails from "./components/nftDetails/nftDetails";

import { GrazProvider, mainnetChains } from "graz";

function App() {
  return (
    <div className="App">
      <GrazProvider
        grazOptions={{
          defaultChain: mainnetChains.cosmoshub,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="loading" element={<Loading />} />
            <Route path="home" element={<Hero />} />
            <Route path="nfts" element={<NFTpage />} />
            <Route path="nftDetails" element={<NFTDetails />} />
          </Routes>
        </BrowserRouter>
      </GrazProvider>
    </div>
  );
}

export default App;
