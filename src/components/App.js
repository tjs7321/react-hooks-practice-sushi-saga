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

  function onEatSushi(eatenSushi) {
    if (wallet >= eatenSushi.price) {
      const updatedSushis = sushiList.map((sushi) => {
        if (sushi.id === eatenSushi.id) return { ...sushi, eaten: true };
        return sushi;
      });

      setSushiList(updatedSushis);
      setWallet((wallet) => wallet - eatenSushi.price);
    } else {
      alert("Need more 💸");
    }
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
