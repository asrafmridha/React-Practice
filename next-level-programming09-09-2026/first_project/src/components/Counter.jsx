import { use } from "react";
import CounterChild from "./CounterChild";
import { CounterContext } from "../providers/counter.provider";

function Counter() {
  const {count,setCount}=use(CounterContext);
  const handleCount = (status) => {
    if (status === "increment") {
      setCount(count + 1);
    } else if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <h1>This is Counter</h1>

      <button onClick={() => handleCount("increment")}>Increment</button>
      <CounterChild></CounterChild>

      <button onClick={() => handleCount("decrement")}>Decrement</button>
    </>
  );
}

export default Counter;
