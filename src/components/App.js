import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import { useEffect, useState } from "react";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiList, setSushiList] = useState([])
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then((sushis) => {
      const updatedSushis = sushis.map((sushi) => {
        return { ...sushi, eaten: false };
      });
      setSushiList(updatedSushis);
    });
  }, [])

  function handleSushiClick(e){
    console.log(e)
  }

  return (
    <div className="app">
      <SushiContainer
      sushiList={sushiList}
      wallet={wallet}
      handleSushiClick={handleSushiClick}
      />
      <Table
      wallet={wallet}
      />
    </div>
  );
}

export default App;
