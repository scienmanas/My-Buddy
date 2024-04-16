import './App.css';
import Landing from './components/Landing';
import Chat from './components/Chat';
import Authors from './components/landing/Authors';
import GeneralAlert from './components/GeneralAlert';
import { useState } from 'react';
import GeneralWebsiteLoader from './components/loaders/GeneralWebsiteLoader';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'


function App() {

  const [isloading, setisloading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertAnimation, setAlertAnimation] = useState(null);


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

  return (
    <div className="app overflow-hidden">
      {isloading && <GeneralWebsiteLoader />}
      <Router>
        <GeneralAlert alert={alert} alertAnimation={alertAnimation} />
        <Routes>
          <Route path="/" element={<Landing isloading={isloading} setLoading={setLoading} showAlert={showAlert} />} />
          <Route path="/chat" element={<Chat isloading={isloading} setLoading={setLoading} />} />
          <Route path="/authors" element={<Authors isloading={isloading} setLoading={setLoading} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
