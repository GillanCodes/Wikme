import React from 'react'

export default function ImageModal({modal, setModal}) {
  return (
    <div className='imageViewer'>
        <div className="image">
            <img src={modal} alt="" />
            <div className="foot">
                <button className='button is-dark' onClick={() => setModal(null)} >Close</button>
            </div>
        </div>
    </div>
  )
}
