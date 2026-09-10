import "./Card.css";

const clickHandler = (age) => {
  alert(age);
};
function Card({ user }) {
  const { name, age } = user;
  return (
    <>
      <div onClick={() => clickHandler(age)} className="card">
        <h1>
          {name} - {age}
        </h1>
      </div>
    </>
  );
}
export default Card;
