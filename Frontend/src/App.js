import "./App.css";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Chat from "./components/Chat";
import Landing from "./components/Landing";

function App() {
  document.body.style.backgroundColor = "#131619";

  return (
    <div className="app overflow-hidden">
      <Router>
        {/* Navbar */}
        <Routes>
          <Route path="/" element={
    <Landing />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
