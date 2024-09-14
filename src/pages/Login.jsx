import { useContext, useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import Display from "./Display"
import Register from "./Register"
import axios from "axios"
import { Gc } from "../store/Store"

function Login({fromparent}){
const [statename,setStatename]= useState([])   
console.log("im rendering")
let {state}=useContext(Gc)





let navigate=useNavigate()


    async function l(){
    setStatename()



}

console.log()

function post(params) {
    return statename

}

return <>
<input onChange={(e)=>setStatename(e.target.value)}></input><br/>
<input></input><br/>
<br/>

<center>hello</center>
<button onClick={l}>login </button><br/>
<b>dont have a account?</b> <button onClick={()=>navigate("/register")}>Register here </button>
<br/>
<br/>






</>




}

export default Login