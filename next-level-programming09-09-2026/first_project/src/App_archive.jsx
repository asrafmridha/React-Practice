import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Form from "./components/Form";
import TestComponent from "./TestComponent";

function App() {
  const [users, setUsers] = useState([
  { name: "Rahim", age: 22 },
  { name: "Karim", age: 17 },
  { name: "Sakib", age: 25 },
]);

const [name, setName] = useState("");
const [age, setAge] = useState("");
const handleSubmit = (e) => {
  e.preventDefault();
  const newUser = {
    name: name,
    age: Number(age),
  };

  // setUsers([...users, newUser]);
  setUsers((prev)=>[...prev,newUser])

  setName("");
  setAge("");
};
  return (
    <>
      {/* <TestComponent name={name}></TestComponent> */}
      {/* {users 
        .filter((user) => user.age > 18)
        .map((user) => (
          <Card user={user} key={user.age}></Card>
        ))} */}

      {/* <Counter></Counter> */}
      <Form
        handleSubmit={handleSubmit}
        name={name}
        age={age}
        setName={setName}
        setAge={setAge}
      ></Form>
      {users.map((user) => (
        <Card user={user} key={user.age}></Card>
      ))}
    </>
  );
}

export default App;
