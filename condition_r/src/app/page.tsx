"use client"
import { useState } from "react"
import Naveed from "../../component/page1"
import Aqsa from "../../component/page2"

export default function Home(){
  const [fatima,setfatima]=useState(true)
  return(
    <div className="fles justify-center items-center flex-col p-24">
      <h1 className="test -[36px] mb-6">CONDITIONAL RENDERING</h1>
      {
        fatima?<Naveed/>
        :<Aqsa/>

      }
      <br/>
      <button onClick={()=>setfatima(!fatima)}>click button</button>
    </div>
  )
}