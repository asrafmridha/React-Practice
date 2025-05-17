import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const Update = () => {
  const navigate = useNavigate();
  const { _id, name, email } = useLoaderData();
  const handleUpdateUser = (e) => {
    const id=_id;
    e.preventDefault();
    let form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Update success:", data);
        navigate("/");
      });
  };
  return (
    <div>
      <p>Update Data For Name :{name} </p>
      <form onSubmit={handleUpdateUser}>
        <label htmlFor="">Name: </label>
        <input type="text" name="name" id="" defaultValue={name} />
        <br /> <br />
        <label htmlFor="">Email: </label>
        <input type="email" name="email" id="" defaultValue={email} />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
