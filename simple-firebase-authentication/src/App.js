import logo from './logo.svg';
import './App.css';
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import app from './firebase/firebase.init';

const auth =getAuth(app);
function App() {
  const provider = new GoogleAuthProvider();
  const handleSignInWithGoogle=() =>{
    console.log("Hello Tahmina");
  }
  return (
    <div className="App">
        <button onClick={handleSignInWithGoogle}>Sign In With Google</button>
    </div>
  );
}

export default App;
