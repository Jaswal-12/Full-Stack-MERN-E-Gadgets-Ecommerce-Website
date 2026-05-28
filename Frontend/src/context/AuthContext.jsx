import { createContext, useEffect, useState } from "react";

import { getMe } from "../api/authApi";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const checkUser = async () => {

    try {

      const data = await getMe();

      setUser(data.user);

    } catch (error) {

      setUser(null);

    }

  };

  useEffect(() => {

    checkUser();

  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;