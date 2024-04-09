import './App.css';
import Landing from './components/Landing';
import Chat from './components/Chat';
import { useState } from 'react';
import GeneralWebsiteLoader from './components/loaders/GeneralWebsiteLoader';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [isloading, setisloading] = useState(false);

  const setLoading = (value) => {
    setisloading(value);
  }

  return (
    <div className="app overflow-hidden">
      {isloading && <GeneralWebsiteLoader  />}
      <Router>
        <Routes>
          <Route path="/" element={<Landing  isloading={isloading} setLoading={setLoading} />} />
          <Route path="/chat" element={<Chat isloading={isloading} setLoading={setLoading} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
