import React, { useState, createContext } from "react";

type AuthProviderProps = {
  children: React.ReactNode;
};
type User = {
  uid: string;
  email: string;
};

type AuthInfo = {
  user: User | null;
};
export const AuthContext = createContext({});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<null | User>(null);

  const authInfo: AuthInfo = { user };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
