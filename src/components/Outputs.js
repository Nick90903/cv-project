import React, { useState } from "react";
function LoadOutputs(props) {
  const [count, setCount] = useState("");

  // Add states for each of the items. Set these states in their own Component
  // and load/render the outputs page here. Pass the states value from their
  // own component over to this script. This is a script to display the values
  // AFTER they have been set and a value assigned in THEIR OWN COMPONENTS
  //

  return (
    <div className="Outputs">
      <div>{props.title}</div>
      <button onClick={() => setCount("clicked")}>Click me</button>
      <p>You clicked {count} times</p>
    </div>
  );
}

export default LoadOutputs;
