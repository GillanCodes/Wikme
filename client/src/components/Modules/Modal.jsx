import React, { useEffect, useState } from 'react'
export default function Modal({content, modalId}) {
  return (
    <div className='modal' id={modalId ? modalId.toString() : null}>

        <div className="modal-bg"></div>

        <div className="modal-content">
          {content && (
            content
          )}  
        </div> 
    </div>
  )
}
