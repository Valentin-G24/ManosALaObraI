import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>

    <h1 className='titulo'>LISTA DE TAREAS DE VALE</h1>

    <form action="" className='formulario'>
      <input type="text" className='agregar' />
      <button className='boton'>ADD</button>  
    </form>
    
    <ul className='List-tarea'>
      
      <li className='list-item'><input type="checkbox" className='checkbox'/> <p className='nombreT'>Task Ngit</p> <button className='basura'>🗑️</button></li>
      
      <li className='list-item'><input type="checkbox" className='checkbox'/> <p className='nombreT'>Task N</p> <button className='basura'>🗑️</button></li>
      <li className='list-item'><input type="checkbox" className='checkbox'/> <p className='nombreT'>Task N-1</p> <button className='basura'>🗑️</button></li>
      <li className='list-item'><input type="checkbox" className='checkbox'/> <p className='completada'>Completed Task N-2</p> <button className='basura'>🗑️</button></li>
      <li className='list-item'><input type="checkbox" className='checkbox'/> <p className='nombreT'>Task k</p> <button className='basura'>🗑️</button></li>
      <li className='list-item'><input type="checkbox" className='checkbox'/> <p className='nombreT'>Task 2</p> <button className='basura'>🗑️</button></li>
      <li className='list-item'><input type="checkbox" className='checkbox'/> <p className='completada'>Completed Task 1</p> <button className='basura'>🗑️</button></li>
    </ul>
    
    
    
    </>

    
    


  )
}

export default App
