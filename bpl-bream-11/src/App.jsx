import { Suspense, useState } from "react";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/homepage/Banner";
import Players from "./components/homepage/players/Players";

const fetchPlayer = fetch("/data.json")
  .then(res => res.json())
function App() {
  
  const [coin,setCoin] = useState(10000000)
  return (
    <>
      <NavBar coin={coin}></NavBar>
      <Banner></Banner>
      <Suspense fallback={<p>Loading.........</p>}>
        <Players fetchPlayer={fetchPlayer} setCoin={setCoin} coin={coin}></Players>
      </Suspense>
      
    </>
  );
}

export default App;
