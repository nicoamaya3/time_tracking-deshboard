import { useState } from 'react'
import './App.css'
import {User} from './components/User'
import {Cartas} from './components/Cartas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <User></User>
    <Cartas/>
    <Cartas/>
    <Cartas/>
    <Cartas/>
    <Cartas/>
    <Cartas/>

    </>
  )
}

export default App
