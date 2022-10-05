import { useState } from 'react'
import './App.css'
import Product from '/src/components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Product />
    </div>
  )
}

export default App
