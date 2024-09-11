import { Changer } from "./Changer"
import { useState } from 'react'
import { Count } from './Count'


const Counter = () => {
   const [count, setCount] = useState(0)
   return (
    <>
       <Changer count={count} setCount={setCount}/>
       <Count count={count}/>
    </>
   )
}

export { Counter }