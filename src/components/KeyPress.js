import React, { useState } from 'react'

const KeyPress = () => {
    const [text, setText] = useState('')
  return (
    <div className='min-h-screen bg-violet-400'>
        <h2>Key press is {text}</h2>
        <input type="text" onChange={(e) =>  setText(e.target.value)}/>
    </div>
  )
}

export default KeyPress