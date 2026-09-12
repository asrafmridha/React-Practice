import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterProvider from "./providers/counter.provider";

function App() {

  return (
    <>
    <CounterProvider>
      <Counter></Counter>
      </CounterProvider>
    </>
  );
}

export default App;
