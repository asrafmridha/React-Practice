import logo from './logo.svg';
import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth = getAuth(app);
function App() {

  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error => {
        console.log(error);
      })
  }
  const handleSignOut = (() => {
    signOut(auth)
      .then(() => {
        setUser({});
      }).catch((error) => {
        setUser({});
      })
  })
  return (
    <div className="App">
      {user.email ?
        <button onClick={handleSignOut}>Sign Out</button>
        :
        <button onClick={handleSignInWithGoogle}>Sign In With Google</button>
      }

      {user.email && <div>
        <h3>User : {user.displayName}</h3>
        <p>Email :{user.email}</p>
        <div>img : <img src={user.photoUrl} alt="" /></div>
      </div>
      }
    </div>
  );
}

export default App;
