"use client";

import { CountContext } from "@/app/context";
import { useState } from "react";

export default function CountProvider({
  children,
}: {
  children: React.ReactNode;
}) {
    const [count,setcount]=useState(0)
  return (
    <div>
      <h1>
        <CountContext.Provider value={{count,setcount}}>
         {children} 
         </CountContext.Provider>
         </h1>
    </div>
  );
}
