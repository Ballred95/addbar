import React, { useState } from 'react' 
import Bar from './bar'

export default function Counter (props) {

    const [add, setAdd] = useState(200)
    const [decrease, setDecrease]=useState(200)
   return (
   <div className='counter'>
       <button onClick={()=>setAdd(add+100)}>Add</button>
       <button onClick={()=>add > 0? setAdd(add-100): null}>Decrease</button>

       <Bar add={add}  decrease={decrease}/>
   </div>
   )
}