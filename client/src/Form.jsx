import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deposit, mobileUpdate, nameUpadate, reset, withdraw } from './Action';

function Form() {

  let dispatch =  useDispatch()
  const [amount, seAmount] = useState("");
  const [fullname, setFullname] = useState("");
  const [mobile, setMobile] = useState(null);

  return (
    <div className='container'>
      <h2>Form</h2>
      <div className='row'>
        <div className='col-4'>
          <input 
            type='number' 
            value={amount} 
            onChange={(e) => seAmount(e.target.value)}
            placeholder='Enter amount' 
            className='form-control'/>
        </div>
        <button 
          className='btn btn-primary col-1'
          onClick={() => dispatch(deposit(amount), seAmount(""))}
        
        >Deposit</button>
        <button 
          className='btn btn-danger col-1 mx-2'
          onClick={() => dispatch(withdraw(amount), seAmount(""))}
        
        >Withdraw</button>
      </div>
      <div className='row mt-2'>
        <div className='col-4'>
          <input 
            type='text' 
            value={fullname} 
            onChange={(e) => setFullname(e.target.value)}
            placeholder='Enter full name' 
            className='form-control'/>
        </div>
        <button 
          className='btn btn-primary col-1'
          onClick={() => dispatch(nameUpadate(fullname), setFullname(""))}
        
        >Update</button>
        
      </div>
      <div className='row mt-2'>
        <div className='col-4'>
          <input 
            type='text' 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)}
            placeholder='Enter Mobile Number' 
            className='form-control'/>
        </div>
        <button 
          className='btn btn-primary col-1'
          onClick={() => dispatch(mobileUpdate(mobile), setMobile(""))}
        
        >Update</button>
        
        
        
      </div>
      <button 
          className='btn btn-danger col-1 mx-2 mt-2'
          onClick={() => dispatch(reset(reset), setMobile(""))}
        
        >Reset</button>
    </div>
  )
}

export default Form
