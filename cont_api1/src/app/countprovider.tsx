import React, { useState } from "react";
import { CountContext } from "./context";

export const Countprovider = ({ children }: { children: React.ReactNode }) => {
    let [count,setcount] = useState(0)
  return <div>
    <CountContext.Provider value={{count,setcount}}>
    {children}
    </CountContext.Provider>
    </div>;
};
