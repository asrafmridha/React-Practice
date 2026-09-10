import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  const handleCount = (status) => {
    if (status === "increment") {
      setCounter(counter + 1);
    } else if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>This is Counter</h1>

      <button onClick={() => handleCount("increment")}>
        Increment
      </button>

      <p>Counter: {counter}</p>

      <button onClick={() => handleCount("decrement")}>
        Decrement
      </button>
    </>
  );
}

export default Counter;
