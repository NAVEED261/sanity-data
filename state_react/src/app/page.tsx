"use client"
import {useState} from "react"
export default function Home(){
  const [name,setName]=useState("Fatima Zehra")
  const [age,setAge]=useState("4years")
  // let name="Fatima Zehra"

  const changeName=()=>{
    setName("Umaima Gul")
    setAge("2years")
    
  }
  return(
    <div>
      <h1>use state</h1>
      <h2>React Hook</h2>
      <br/>
      <p>{name} is {age}</p>
      <button onClick={changeName}>click button</button>
    </div>
  )
}