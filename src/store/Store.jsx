import { useReducer } from "react";
import { createContext } from "react";
import {initial} from "./initial"


export let GCAPI=createContext()



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

// 1,context api reducer
// 2.create a folder
// 3.create reducer->initail , reducer
// 4.create context
// 5.create a function with capital name ,export it 
// 6.cover the entry point of App.jsx -->App.jsx
// 7.use the context and provide the reducervalues state , dispatch 
// 8.put your App.jsx children


export  let GCF=({children})=>{

let [state,dispatch]=useReducer(reducer,initial)
return <>
<GCAPI.Provider value={{state,dispatch}} >
 {children}
</GCAPI.Provider>


</>





}




