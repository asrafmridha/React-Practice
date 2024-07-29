import {getAuth} from 'firebase/auth';
import './App.css';
import app from './firebase/firebase.init';
import RegisterReactBootstarp from './components/RegisterReactBootstarp';


const auth =getAuth(app);

const handleRegister=(event)=>{
  event.preventDefault();
  const email =event.target.email.value;
  const password =event.target.email.value;
  console.log(email,password);
}
function App() {
  return (
    <div className="">
      <RegisterReactBootstarp></RegisterReactBootstarp>

    </div>
  );
}

export default App;
