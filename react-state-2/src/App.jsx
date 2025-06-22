import { useState } from 'react'
import LudoBoard from './LudoBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LudoBoard />
    </>
  )
}

export default App
