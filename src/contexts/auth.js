import React, { createContext, useState } from 'react';

const AuthContext = createContext(null);

function AuthContextProvider({ children }) {
  return (
    <AuthContext.Provider>
      { children }
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };
