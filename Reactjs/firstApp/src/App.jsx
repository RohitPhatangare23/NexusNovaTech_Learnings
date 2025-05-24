import React from 'react'
import Product from './Product'
import State from './state'
import CRendering from './CRendering'

function App() {
  // console.log('App');
  return (
    <>  
    <h1>My First React App</h1>
    <div className="w-444 h-500 bg-red-600">
      <h2 className="p-2 mt-3 text-3xl font-bold underline">Rohit Phatangare</h2>
    </div>
    <Product value="Product Details" data={{name:"iphone15",price:150000}}/>
    <p className="text-blue-600 dark:text-sky-400">Below state Concept using</p>
    <State/>
    <CRendering/>
    </>
  )
}




export default App;