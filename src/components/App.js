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

  function onEatSushi(sushi){
    console.log(sushi)
  }

  return (
    <div className="app">
      <SushiContainer
      sushiList={sushiList}
      wallet={wallet}
      onEatSushi={onEatSushi}
      />
      <Table
      wallet={wallet}
      />
    </div>
  );
}

export default App;
