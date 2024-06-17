import React, { useState } from 'react'

export default function counter({name}) {
    const [count, setCount] = useState(0);

  return (
    <div className='flex flex-col items-center mt-4'>
        <h1 className='text-3xl capitalize'>{name}</h1>
        <h2 className='text-2xl'>{count}</h2>
        <div>
        <button className='px-4 py-2 bg-blue-600 rounded text-white capitalize ' onClick={()=>{setCount(pre=>pre+1)}}>increament</button>
        <button className='px-4 py-2 bg-blue-600 rounded text-white capitalize ml-4' onClick={()=>{setCount(0)}}>reset</button>
        <button className='px-4 py-2 bg-blue-600 rounded text-white capitalize ml-4' onClick={()=>{setCount(pre=>pre-1)}}>decreament</button>
        </div>
    </div>
  )
}
