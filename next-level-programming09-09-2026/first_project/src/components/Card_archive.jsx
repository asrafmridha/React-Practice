import "./Card.css";

// function Card(props) {
//   return <>{props.children}</>;
// }
// export default Card;

// function Card({ name, age }) {
//         if (age <18){
//         return <div className="card">You are too young</div>
//     }
//   return (
//     <div className="card">
//       <h1>
//         {name} - {age}
//       </h1>
//     </div>
//   );
// }

function Card({ user }) {
  const { name, age } = user;
  console.log(user);
  return (
    <>
      <div className="card">
        <h1>
          {name} - {age}
        </h1>
      </div>
    </>
  );
}
export default Card;
