import React, { createContext, useState, FC, ReactNode } from 'react';

export const GlobalContext = createContext(null);

const GlobalProvider:FC<{children:ReactNode}> = ({ children }) => {
  const [user, setUser] = useState( () => {
    const user = localStorage.getItem('user')
    return JSON.parse(user || '{}')
  });

  return (
    <GlobalContext.Provider value={{
      user,
      setUser,
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalProvider;
