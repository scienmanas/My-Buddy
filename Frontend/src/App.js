import './App.css';
import Landing from './components/Landing';
import Chat from './components/Chat';
import GeneralAlert from './components/GeneralAlert';
import Authors from './components/landing/Authors';
import { useEffect } from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import SignUp from "./components/Signup";
import Details from './components/Details';
import Login from "./components/Login"
import { useGlobalContext } from './Context/global_context';
import { gapi } from "gapi-script"



function App() {

  const [alert, setAlert] = useState(false);
  const [alertAnimation, setAlertAnimation] = useState(null);
  const { authUser, setAuthUser, tempuser } = useGlobalContext();


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type   // sucess, failed
    })
    setAlertAnimation("translate-x-[290px]");
    setTimeout(() => {
      setAlertAnimation("null");
    }, 2300);

    setTimeout(() => {
      setAlert(null)

    }, 4000);
  }


  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: "506470945121-lnvmjbs2lq68itqet12i7n2h9tpouo3u.apps.googleusercontent.com",
        scope: ""
      })
    }
    gapi.load("client:auth2", start)
  })

  return (

    <div className="app overflow-hidden">
      <Router>
        <GeneralAlert alert={alert} alertAnimation={alertAnimation} />
        <Routes>
          <Route path="/" element={<Landing showAlert={showAlert} />} />
          <Route path="/chat" element={authUser ? <Chat /> : <Navigate to="/login" />} />
          <Route path="/signup" element={!authUser ? <SignUp showAlert={showAlert} /> : <Navigate to="/chat" />} />
          <Route path="/details" element={!authUser ? (tempuser ? <Details /> : <Navigate to="/login" />) : < Navigate to="/chat" />} />
          <Route path="/login" element={!authUser ? <Login  showAlert={showAlert} /> : <Navigate to="/chat" />} />
          <Route path="/authors" element={<Authors showAlert={showAlert} />} />
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
