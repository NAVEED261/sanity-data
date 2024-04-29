"use client"
import React from 'react'
import {useContext}from "react"
import { CountContext } from './context'
const Test = () => {
    let a = useContext(CountContext)
    
  return (
    <div>Test
        <p>{a.count}</p>
    </div>
  )
}

export default Test