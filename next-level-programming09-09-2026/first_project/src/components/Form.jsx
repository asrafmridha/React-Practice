import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, age);
  };
  return (
    <>
      <h1>This is Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          name=""
          id=""
          onChange={(e) => setAge(e.target.value)}
        />
        <button>submit</button>
      </form>
    </>
  );
}

export default Form;
