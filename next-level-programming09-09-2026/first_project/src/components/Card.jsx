import { useState } from "react";
import "./Card.css";

function Card({ user }) {
  console.log(user);
  const [member, setMember] = useState("");
  const { name, age } = user;
  const clickHandler = (memberName) => {
    setMember(memberName);
  };

  return (
    <>
      <div onClick={() => clickHandler(name)} className="card">
        <h1>
          {name} - {age}
        </h1>
       { member && <p>Greetings {member}</p> }
      </div>
   
    </>
  );
}
export default Card;
