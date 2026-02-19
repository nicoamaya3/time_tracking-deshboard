import { useState } from 'react'
import './App.css'
import { User } from './components/User'
import { Cartas } from './components/Cartas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <User></User>
      <div className='cartass'>
        <Cartas nombre = "Work" horas = "32 hrs" anterior="Last Week " horap="- 36hrs" color="work" />
        <Cartas nombre = "Exercise" horas = "4 hrs" anterior="Last Week " horap="- 5hrs" color="exercise" />
       
      </div>
      <div className='cartass'>
        <Cartas nombre = "Play" horas = "10 hrs" anterior="Last Week " horap="- 8hrs" color="play" />
        <Cartas nombre = "Social" horas = "5 hrs" anterior="Last Week " horap="- 10hrs" color="social" />
       
      </div>
      <div className='cartass'>
         <Cartas nombre = "Study" horas = "4 hrs" anterior="Last Week " horap="- 7hrs" color="study" />
          <Cartas nombre = "Self Care" horas = "2 hrs" anterior="Last Week " horap="- 2hrs" color="selfcare" />
      </div>



    </>
  )
}

export default App
