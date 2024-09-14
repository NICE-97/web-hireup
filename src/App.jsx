import { useState } from 'react'
import './App.css'
import Home from './page/Home';
import Company from './page/Company';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      <Company/>
    </>
  )
}

export default App
