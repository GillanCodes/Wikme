import React from 'react'

export default function PageModal({setModal, pageModal}) {
  return (
    <div className='block-adder'>

            <div className="block-adder-container">
                <div className="block-adder-content">
                    <div className="head">
                        <h2>{pageModal.page.name}</h2>
                    </div>
                    <div className="body">
                        <div className="items">
                            
                        </div> 
                    </div>
                    <div className="footer">
                        <button onClick={() => setModal({...pageModal, isOpen:false})}>Close</button>
                    </div>
                </div>
            </div>
        </div>
  )
}
