import './App.css';
import Landing from './components/Landing';
import Chat from './components/Chat';
import GeneralAlert from './components/GeneralAlert';
import Authors from './components/landing/Authors';
import { useEffect } from 'react';
import { useState } from 'react';
import GeneralWebsiteLoader from './components/loaders/GeneralWebsiteLoader';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import SignUp from "./components/Signup";
import Details from './components/Details';
import Login from "./components/Login"
import { useGlobalContext } from './Context/global_context';
import {gapi} from "gapi-script"
function App() {
  
  const [isloading, setisloading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertAnimation, setAlertAnimation] = useState(null);
  const {authUser,setAuthUser}=useGlobalContext();

  const setLoading = (value) => {
    setisloading(value);
  }

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

    }, 3000);
  }
  
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:"506470945121-lnvmjbs2lq68itqet12i7n2h9tpouo3u.apps.googleusercontent.com",
        scope:""
      })
    }
    gapi.load("client:auth2",start)
  })

  return (
    <div className="app overflow-hidden">
      {isloading && <GeneralWebsiteLoader />}
      <Router>
        <GeneralAlert alert={alert} alertAnimation={alertAnimation} />
        <Routes>
          <Route path="/" element={<Landing isloading={isloading} setLoading={setLoading} showAlert={showAlert} />} />
          <Route path="/chat" element={<Chat isloading={isloading} setLoading={setLoading} />} />
          <Route path="/signup" element={authUser?<Chat isloading={isloading} setLoading={setLoading}/>:<SignUp  isloading={isloading} setLoading={setLoading} />}/>
          <Route path="/details" element={authUser?<Chat isloading={isloading} setLoading={setLoading}/>:<Details  isloading={isloading} setLoading={setLoading} />}/>
          <Route path="/login" element={authUser?<Chat isloading={isloading} setLoading={setLoading}/>:<Login  isloading={isloading} setLoading={setLoading} />}/>
          <Route path="/authors" element={<Authors isloading={isloading} setLoading={setLoading} />} />
        </Routes>
      </Router>
      <Toaster/>
    </div>
  );
}

export default App;
