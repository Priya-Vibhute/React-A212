import React, { useState } from "react";

function ShortCircuit() {
  const [word, setWord] = useState("");


  return <div>
    {word && <h1>Word has value {word}</h1>}
  </div>;
}

export default ShortCircuit;
