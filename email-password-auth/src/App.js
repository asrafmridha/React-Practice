import {getAuth} from 'firebase/auth';
import './App.css';
import app from './firebase/firebase.init';


const auth =getAuth(app);

const handleRegister=(event)=>{
  event.preventDefault();
  const email =event.target.email.value;
  const password =event.target.email.value;
  console.log(email,password);
}
function App() {
  return (
    <div className="App">
      <form onSubmit={handleRegister}>
        <input type="email" name="email" id="" placeholder='Your Email' /> <br />
        <input type="password" name="password" id="" placeholder='Password' /> <br />
        <button>Register</button>
      </form>

    </div>
  );
}

export default App;
