import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddCommuteForm from './AddCommuteForm';
import CommuteList from './CommuteList';
import {useContext} from 'react';
import AuthContext from './AuthContext';
import {signInWithGoogle, signOut} from './firebaseConfig';

function App() {
  const {user} = useContext(AuthContext); // this is the logged in user

  return (
    <div className="App">
      {
        user ?
        <button onClick={signOut}>{user.displayName}, Sign Out?</button> : <button onClick={signInWithGoogle}>Sign In</button>
      }
      <AddCommuteForm/>
      <CommuteList />
    </div>
  );
}

export default App;
