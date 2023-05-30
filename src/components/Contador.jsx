import './Contador.css'
import { useState } from 'react';

function Contador() {
  const [count, setCount] = useState (0)
  function sumar(){
    if (count < 15) 
      setCount(count + 1)
    }
  function restar(){
    if (count >= 1) 
      setCount(count - 1)
    }
    
  return (
    <div className='itemCount'>
      <div className='botonCount'>
        <button onClick={restar} className='rest'>-</button>
        <p className='count'>{count}</p>
        <button onClick={sumar} className='agreg'>+</button>
      </div>
    </div>
  )
}
export default Contador;