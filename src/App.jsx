import { useState } from 'react'
import  { Outlet } from 'react-router-dom'
import NavBar from './NavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <div className="mainContent" style={{paddingTop: "6rem"}}>
    <Outlet />
    </div>
    </>
  )
}

export default App
