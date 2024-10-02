import './App.css'
import firebase from "firebase/app";
import { getAuth } from 'firebase/auth'

function App() {
  const loginWithGoogle = () => {
    firebase.auth
  }

  return (
    <div className="App">
      <button onClick={loginWithGoogle}>Login with Google</button>
    </div>
  )
}

export default App
