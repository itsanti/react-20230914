import React, { useContext } from "react";
import { useState } from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({'name': 'Aleksandr', 'theme': 'light'});
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};