import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export const GlobalContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );

  const [selectedchat,setselectedchat]=useState("");
  const [tempuser,settempuser]=useState("");
  const [mode,setmode]=useState(null);
  const [chats,setchats]=useState([])
  const [chattitle,setchattitle]=useState("")
  const [chatdesc,setchatdesc]=useState("")

  return (
    <GlobalContext.Provider
      value={{
        authUser,
        setAuthUser,
        selectedchat,
        setselectedchat,
        mode,
        setmode,
        chats,
        setchats,
        chattitle,
        setchattitle,
        chatdesc,
        setchatdesc,
        tempuser,
        settempuser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
