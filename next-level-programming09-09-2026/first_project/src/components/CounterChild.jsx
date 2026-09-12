import { use, useState } from "react";
import { CounterContext } from "../providers/counter.provider";


function CounterChild() {
  const {count,setCount}=use(CounterContext);
  return (
    <>
      <h1>Count : {count}</h1>
    </>
  );
}

export default CounterChild;
