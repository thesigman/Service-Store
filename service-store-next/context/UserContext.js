import { createContext, useContext } from "react";

const UserContext = createContext();

export function UserWrapper({ children }) {
  console.log(children);
  let user = {};

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  return useContext(UserContext);
}