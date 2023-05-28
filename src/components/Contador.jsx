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
      <div className='botonCount btn btn-secondary'>
        <button onClick={restar} className='rest btn btn-info'>-</button>
        <p className='count'>{count}</p>
        <button onClick={sumar} className='agreg btn btn-info'>+</button>
      </div>
    </div>
  )
}
export default Contador;