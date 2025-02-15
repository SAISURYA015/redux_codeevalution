export function deposit(amount){
  return {type: "deposit", payload: amount}
} 

export function withdraw(amount){
  return {type: "withdraw", payload: amount}
} 

export function nameUpadate(fullname){
  return {type: "nameUpdate", payload: fullname}
} 

export function mobileUpdate(mobile){
  return {type: "mobileUpdate", payload: mobile}
}

export function reset(){
  return {type: "reset"}
} 