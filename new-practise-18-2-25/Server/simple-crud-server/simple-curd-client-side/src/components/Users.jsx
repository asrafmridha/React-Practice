import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
    console.log(form);
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        form.reset();
      });
  };
  return (
    <div>
      <p>Simple Crud System</p>
      <h3>Add Users</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name: </label>  
        <input type="text" name="name" id="" />
        <br /> <br />
        <label htmlFor="">Email: </label>
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>

    </div>
  );
};

export default Users;
