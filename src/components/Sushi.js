import React, { useState } from "react";

function Sushi({name, img_url, price}) {

  let [eaten, setEaten] = useState(false)

  function handleSushiClick(){
    console.log(`You ate ${name}`)
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleSushiClick}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten = false ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
