import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer(props) {

  const {allSushi} = props

  const displaySushi = allSushi.map(sushi=> <Sushi key={sushi.id} sushi={sushi}/>)

  return (
    <div className="belt">
      {displaySushi}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
