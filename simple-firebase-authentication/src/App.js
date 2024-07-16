import logo from './logo.svg';
import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from './firebase/firebase.init';

const auth = getAuth(app);
function App() {
  const provider = new GoogleAuthProvider();
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="App">
      <button onClick={handleSignInWithGoogle}>Sign In With Google</button>
    </div>
  );
}

export default App;