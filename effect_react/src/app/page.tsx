"use client"
import { useState,useEffect } from "react"

export default function Home(){
  const [count1,setcount1]=useState(0)
  const [count2,setcount2]=useState(0)
  useEffect(()=>{
    console.log("1st function are fired")
  },[])
  // useEffect(()=>{
  //   console.log("2nd function are fired")
  // },[count1])
  useEffect(()=>{
    console.log("3rd function are fired")
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  },[count1,count2])

  return(
    <div>
      <h1>useeffect</h1>
      <h2>React Hook</h2>
      <button onClick={()=>setcount1(count1+1)}>counter increament 1={count1}</button>
    <br/>
    <button onClick={()=>setcount2(count2+1)}>counter increament 2={count2}</button>

      
    
    </div>

  )
}