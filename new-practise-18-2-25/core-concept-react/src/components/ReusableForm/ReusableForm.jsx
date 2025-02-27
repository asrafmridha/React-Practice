
import "./ReusableForm.css";

const ReusableForm = ({ formTitle, submitBtnText = "", handleSubmit,children }) => {
  const handleSubmitThisPageDataReceive = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.name.email,
      password: e.target.name.password,
    };
    handleSubmit(data);
  };
  return (
    <div>
      {children}
      <form onSubmit={handleSubmitThisPageDataReceive}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit" className="btn">
          {submitBtnText}
        </button>
      </form>
    </div>
  );
};

export default ReusableForm;
