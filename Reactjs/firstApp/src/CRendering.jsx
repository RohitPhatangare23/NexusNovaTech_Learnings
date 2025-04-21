import React from 'react'
import { useState } from 'react'

function CRendering() {
    // Conditional Rendering Concept
    var [a,b]=useState(true);
  return (
  <>
  <h1>Condintional Rendering Concept</h1>
    <div className='text-white w-700 h-60 bg-zinc-600'>
        <h2 className={`${a===false ? "text-blue-400" :"text-green-400"}`}>{a===false ? "Yuva":"Ritesh"}</h2>
        <button onClick={()=>b(!a)}>Change</button>
    </div>

        
  </>
  )
}

export default CRendering