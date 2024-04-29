"use client"
import React from 'react'
import {useContext} from "react"
import { CountContext } from './context'
import { link } from 'fs'


const Context_Api = () => {
  let obj=useContext(CountContext)
  console.log(obj)
  return (
    <div>Context_Api
      <p>{obj.count}</p>
      <p><link href="/text">Test</link></p>
      <br/>
      <button onClick={()=>obj.setcount(++obj.count)}>increament</button>
      <br/>
      <button onClick={()=>obj.setcount(--obj.count)}>increament</button>
    </div>
  )
}

export default Context_Api