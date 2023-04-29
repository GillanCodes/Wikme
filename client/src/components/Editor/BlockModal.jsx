import React from 'react'

export default function BlockModal({setModal}) {
  return (
    <div className='block-adder'>

        <h1>Test Modal</h1>
        <p>Test</p>

        <button onClick={() => setModal(0)}>Close</button>

    </div>
  )
}
