import React, { createContext, useState } from "react";

const UserContext = createContext(null); // Create a context with a default value of null

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
