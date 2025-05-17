import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router";

const Users = () => {
  const [users, setUsers] = useState([]);
  const usersData = useLoaderData();
  const navigate=useNavigate();
  useEffect(() => {
    setUsers(usersData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = e.target;
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
        fetch(`http://localhost:5000/users`)
          .then((res) => res.json())
          .then((newUsers) => setUsers(newUsers));
      });
  };
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          fetch(`http://localhost:5000/users`)
            .then((res) => res.json())
            .then((newUsers) => setUsers(newUsers));
        }
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

      <p>All Users ({users.length})</p>
      {users.map((user) => (
        <p key={user._id}>
          {user.name} - {user.email}
                <button onClick={()=>navigate(`/edit/${user?._id}`)} className="btn ">
            Edit
          </button>
          <button onClick={() => handleDelete(user._id)} className="btn ">
            Delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Users;
