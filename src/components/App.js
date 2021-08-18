import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [allSushi, setAllSushi] = useState([])

useEffect(()=>{
  fetch(API)
  .then(r=>r.json())
  .then(data=>setAllSushi(data))

},[])

const displaySushi = allSushi.slice(0,4)

  return (
    <div className="app">
      <SushiContainer allSushi={displaySushi}/>
    </div>
  );
}

export default App;
