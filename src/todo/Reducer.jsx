import React, { useReducer, useState } from 'react'

const Reducer = () => {
 
const [text,setText]=useState("")
    


let initial={
    names:[],
    count:0
}

function reducer(state,action){
console.log(state,action)
switch (action.type) {
    case "ADD":
        
        return {...state,names:[...state.names,action.payload]}
    case "REMOVEALL":
return {empty:[]}

    default:
        break;
}




}





const [state,dispatch]=useReducer(reducer,initial)
console.log(state)
return (
    <div>
<input value={text} onChange={(e)=>setText(e.target.value)} className='form-control my-3 w-50' ></input>      
<button className='btn btn-dark mx-2' onClick={()=>dispatch({type:"ADD",payload:text})}> click </button>
<button className='btn btn-dark' onClick={()=>dispatch({type:"REMOVEALL"})}> remove click </button>
2buttons click 1 to ADD click other to substract



    </div>
  )
}

export default Reducer
