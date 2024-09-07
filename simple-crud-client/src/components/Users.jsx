import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <h2>All Users : {users.length}</h2>
      <div>
        {users.map((user) => (
          <p>
            {user.name} : {user.email}
            <button onClick={() => handleDelete(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
