import React, { useState } from 'react'

function state() {
    const [a,b]=useState(10);
  return (
    <>
    <div className='text-black-600 w-700 h-500 bg-yellow-600'>
        <h1>State</h1>
        <h2>{a+1}</h2>
        
    </div>
    <button className="px-2 py-3 bg-slate-900 text-white rounded"onClick={()=>{b(a+1)}}>Increment</button>
    <br />
    <button className="mt-3 px-2 py-3 bg-slate-900 text-white rounded" onClick={()=>{b(a-1)}}>Decrement</button>
    
    </>
  )
}

export default state