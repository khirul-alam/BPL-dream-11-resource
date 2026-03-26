import { Suspense, useState } from "react";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Banner from "./components/homepage/Banner";
import Players from "./components/homepage/players/Players";

const fetchPlayer = fetch("/data.json")
  .then(res => res.json())
function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense fallback={<p>Loading.........</p>}>
        <Players fetchPlayer={fetchPlayer}></Players>
      </Suspense>
    </>
  );
}

export default App;
