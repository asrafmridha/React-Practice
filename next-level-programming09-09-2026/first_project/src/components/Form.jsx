import { useState } from "react";

function Form({ name, age, setName, setAge, handleSubmit }) {

  return (
    <>
      <h1>This is Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          value={name}
          id=""
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          name=""
          value={age}
          id=""
          onChange={(e) => setAge(e.target.value)}
        />
        <button>submit</button>
      </form>
    </>
  );
}

export default Form;
