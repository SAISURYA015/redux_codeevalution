// how to create reducer function and initialize store

import { createStoreHook } from "react-redux";
import { combineReducers, createStore } from "redux"

const initialState = {
  balance: 0,
  fullName: "",
  mobile: null,
}

function accountReducer(state = initialState, action) {

  // switch case
  switch(action.type){
    case "deposit": return {...state, balance:state.balance + +action.payload};
    case "withdraw":  return {...state, balance:state.balance - +action.payload};
    case "mobileUpdate": return {...state, mobile:action.payload};
    case "nameUpdate": return {...state, fullName:action.payload};
    case "reset": return initialState;
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

function transactionReducer(state=[], action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return [
        ...state, 
        {
          id: action.payload.id,
          amount: action.payload.amount, 
          type: action.payload.type, 
          date: action.payload.date
        },
      ];

    default:
      return state;
  }
}



// dispatch({type: "deposit", payload: 1000})
// dispatch({type: "withdraw", payload: 1000})
// dispatch({type: "mobileUpdate", payload: '0000000000'})
// dispatch({type: "nameUpdate", payload: 'surya'})


let rootReducer = combineReducers(
  {
    account: accountReducer,
    transaction: transactionReducer
  }
)
const store = createStore(rootReducer)


// console.log(store.getState())

// store.dispatch({type: "deposit", payload: 1000});
// store.dispatch({type: "withdraw", payload: 10})
// store.dispatch({type: "mobileUpdate", payload: '9898546678'})
// store.dispatch({type: "nameUpdate", payload: 'surya'})

// console.log(store.getState())

export default store;