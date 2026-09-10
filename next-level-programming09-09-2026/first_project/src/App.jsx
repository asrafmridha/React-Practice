import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Form from "./components/Form";
import TestComponent from "./TestComponent";

const name = "Achol";
const users = [
  { name: "Rahim", age: 22 },
  { name: "Karim", age: 17 },
  { name: "Sakib", age: 25 },
  { name: "Nusrat", age: 19 },
  { name: "Mim", age: 16 },
  { name: "Tanvir", age: 21 },
  { name: "Fahim", age: 18 },
  { name: "Jannat", age: 23 },
  { name: "Rafi", age: 15 },
  { name: "Sumaiya", age: 20 },
];

function App() {
  return (
    <>
      {/* <TestComponent name={name}></TestComponent> */}
      {/* {users 
        .filter((user) => user.age > 18)
        .map((user) => (
          <Card user={user} key={user.age}></Card>
        ))} */}

        {/* <Counter></Counter> */}
        <Form></Form>
        
    </>
  );
}

export default App;
