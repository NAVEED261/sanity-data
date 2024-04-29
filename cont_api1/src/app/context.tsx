"use client"

import {createContext} from "react"

interface count {
    [x:string]:any

}
export let CountContext=createContext({}as count)