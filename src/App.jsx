import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <Navbar></Navbar>
          <h1 className="text-3xl font-bold underline">
              Hello All world! {count} <button onClick={()=>{setCount(count+1)}}>+</button>
          </h1>
      </>
  )
}

export default App
