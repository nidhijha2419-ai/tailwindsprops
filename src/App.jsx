import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username: "Nidhi",
    age: 23
  }
  let newArr =[1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'> Tailwind Test</h1>
      <Card username="chaiaurcode" btnText="click me"/>
      <Card username="nidhi" btnText="visit me"/>
      
    </>
  )
}

export default App
