import { json } from "react-router-dom";
import "./App.css";

function App() {
  const handleAddUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deleteCount > 0) {
          alert("DELETE SUCCESSFULLY");
        }
      });
  };

  return (
    <>
      <h1>Simple Crud</h1>
      <form onSubmit={handleAddUser}>
        <input type="email" name="email" id="" /> <br />
        <input type="text" name="name" id="" /> <br />
        <input type="submit" value="ADD USER" />
      </form>
    </>
  );
}

export default App;
