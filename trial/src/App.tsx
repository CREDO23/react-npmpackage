import { useState } from 'react'
import reactLogo from './assets/react.svg'
import PresentMe from 'react-library'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <PresentMe name='Thierry' profession='Software Developper'/>
    </div>
  )
}

export default App
