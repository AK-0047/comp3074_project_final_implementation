import React, { createContext, useState } from 'react';

// Create the context
export const UserContext = createContext();

// Provide the context
export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    username: '',
  });

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
