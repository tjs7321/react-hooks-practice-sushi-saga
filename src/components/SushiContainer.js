import { useState } from "react";
import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushiList, onEatSushi}) {

  const [displayedSushis, setDisplayedSushis] = useState(4)

  function handleMoreClick() {
    setDisplayedSushis(displayedSushis + 4)
  }

  return (
    <div className="belt">
      {sushiList.slice((displayedSushis - 4), displayedSushis).map((sushi) => (
        <Sushi
        key={sushi.id}
        sushi={sushi}
        onEatSushi={onEatSushi}
        />
      ))}
      <MoreButton
      handleMoreClick={handleMoreClick}
      />
    </div>
  );
}

export default SushiContainer;
