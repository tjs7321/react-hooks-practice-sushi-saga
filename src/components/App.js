import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import { useEffect, useState } from "react";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiList, setSushiList] = useState([])

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(r => setSushiList(r))
  }, [])

  return (
    <div className="app">
      <SushiContainer
      sushiList={sushiList}
      />
      <Table />
    </div>
  );
}

export default App;
