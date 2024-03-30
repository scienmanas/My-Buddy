import './App.css';
import { useState } from 'react';
import SideBar from './components/SideBar';
import ContentSide from './components/ContentSide';
import Chat from './components/Chat';
import Share from './components/Share';

function App() {

  const [shareWindow, setShareWindow] = useState(false)


  const handleShare = () => {
    setShareWindow(true)
  }

  const handleCloseShare = () => {
    setShareWindow(false)
  }

  document.body.style.backgroundColor = "#131619"

  return (
    <div className="app flex flex-row">
      {shareWindow && <div className="share-button absolute w-full h-full flex justify-center items-center opacity-80  bg-slate-600">
        <Share handleCloseShare={handleCloseShare} />
      </div>
      }
      <div className="in-contents flex flex-row w-full">
        <div className="sidebar min-w-72 min-h-screen">
          <SideBar />
        </div>
        <div className="content-side w-full flex flex-col justify-between">
          <div className="user-options-bar">
            <ContentSide handleShare={handleShare} />
          </div>
          <div className="text-area">
          </div>
          <div className="chat-area text-white">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
