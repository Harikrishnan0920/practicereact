import axios from 'axios'
import React, { useDebugValue, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Front = () => {
const [Inp,Setinp]=useState("")
const [Data,SetData]=useState([])


let navigate=useNavigate()




useEffect(()=>{

  get()





},[])

async function get(){
  debugger
try {
  

  let response= await axios.get('https://62e6b82469bd03090f74e19d.mockapi.io/user')
  console.log(response.data)
  SetData(response.data)
} catch (error) {
console.log(error)
}finally{
  console.log("done")
}


}






  return <>
    <div>
     <h1><center>Todo list</center></h1> 
<input  value={Inp}  placeholder='task' onChange={(e)=>Setinp(e.target.value)}/>
<button onClick={async ()=>{


await axios.post("https://62e6b82469bd03090f74e19d.mockapi.io/user",{
  "task":Inp
}
)
get()
}}> submit  </button>


<table className='table bordered '>
<thead>
  <tr>
    <th>
      task
    </th>
    <th>
      action
    </th>
    <th>
      action
    </th>
  </tr>
</thead>
<tbody>
 {Data.map((e)=>{

  return <>
  <tr key={e.id}>
<td>{e.task} </td>
<td><button onClick={()=>navigate("/user/"+e.id)}>Edit</button></td>
<td><button onClick={async ()=>{
  debugger
try{
  
let response = await axios.delete("https://62e6b82469bd03090f74e19d.mockapi.io/user/"+e.id)
console.log(response.data)
get()
}catch(e){
  console.log(e)
}

}}>Delete</button></td>
  </tr>
  </>

 })}
</tbody>



</table>




    </div>
</>
}

export default Front
