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
  const [mode,setmode]=useState("parent");
  const [chats,setchats]=useState([])

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
        setchats
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
