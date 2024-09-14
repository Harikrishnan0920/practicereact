import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {
let navigate=useNavigate()
let {uid}=useParams()
const [text,setText]=useState("")

useEffect(()=>{
  get()
},[])




async function get(){
debugger
let response=await axios.get("https://62e6b82469bd03090f74e19d.mockapi.io/user/"+uid)
 setText(response.data.task)



}








  return (
    <div>
      <input value={text} placeholder='edit' onChange={(e)=>setText(e.target.value)} className='form-control w-50 my-4'/>
      <button  onClick={async()=>{
        await axios.put("https://62e6b82469bd03090f74e19d.mockapi.io/user/"+uid,{task:text})
        navigate("/")
      }} className='btn btn-outline-dark ms-1'>update</button>




    </div>
  )
}

export default Edit
