import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const usersData = useLoaderData();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(usersData);
  }, [usersData]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    console.log(form);
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    form.reset();
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };
  return (
    <div>
      <p>User Management System</p>
      <h3>Numbers Of Users :{users.length}</h3>
      <h3>Add Users</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label> <br />
        <input type="text" name="name" id="" />
        <br />
        <label htmlFor="">Email:</label> <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {users.map((user) => (
        <p key={user.id}>
          {" "}
          {user.id} : {user.name} : {user.email}
        </p>
      ))}
    </div>
  );
};

export default Users;
