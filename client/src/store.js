import { createStore } from "redux"

const initialState = {
  balance: 0,
  fullName: "",
  mobile: null,
}

function reducer(state = initialState, action) {

  // switch case
  switch(action.type){
    case "deposit": return {...state, balance:state.balance + action.payload};
    case "withdraw":  return {...state, balance:state.balance - action.payload};
    case "mobileUpdate": return {...state, mobile:action.payload};
    case "nameUpdate": return {...state, fullName:action.payload};
    default:
      return state
  }
    
  // if condition
  // if(action.type === "deposit") 
  //   return {...state, balance:state.balance + action.payload};
  // else if(action.type === "withdraw") 
  //   return {...state, balance:state.balance - action.payload}
  // else if(action.type === "mobileUpdate") 
  //   return {...state, mobile:action.payload}
  // else if(action.type === "nameUpdate") 
  //   return {...state, fullName:action.payload}
  // else 
  //   return state
}

// dispatch({type: "deposit", payload: 1000})
// dispatch({type: "withdraw", payload: 1000})
// dispatch({type: "mobileUpdate", payload: '0000000000'})
// dispatch({type: "nameUpdate", payload: 'surya'})



const store = createStore(reducer)

console.log(store.getState())

store.dispatch({type: "deposit", payload: 1000});
store.dispatch({type: "withdraw", payload: 10})
store.dispatch({type: "mobileUpdate", payload: '9898546678'})
store.dispatch({type: "nameUpdate", payload: 'surya'})

console.log(store.getState())