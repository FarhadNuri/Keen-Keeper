import React from "react";
import { createContext } from "react";
import { use } from "react";
export const DataContext = createContext();

function HomeDataContext({ userPromise, children }) {
  const users = use(userPromise);
  const userData = users.data;

  return (
    <div>
      <DataContext.Provider value={userData}>
        {children}
      </DataContext.Provider>
    </div>
  );
}

export default HomeDataContext;
