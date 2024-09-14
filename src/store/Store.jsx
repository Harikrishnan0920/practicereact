import { createContext, useReducer } from "react";

let initial={
names:[]
}

function reduce(state,action){
switch (action.type) {
    case "ADD":
        return {...state,name:[...state.name,action.payload]}

    default:
        break;
}
}




export let Gc=createContext()
export let Create=({children})=>{
let [state,dispatch]=useReducer(reduce,initial)
console.log(children)
return<>
    <Gc.Provider value={{state,dispatch}} >
     {children}
    </Gc.Provider>
</>



}



