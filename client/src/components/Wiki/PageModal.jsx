import React from 'react'

export default function PageModal({setModal, pageModal}) {
  return (
    <div className='page-modal'>
        <div className="page-modal-container">
            <div className="page-modal-content">
                <div className="head">
                    <h2>{pageModal.page.name}</h2>
                </div>
                <div className="body">
                    <div className="items">
                        <div className="form">
                            <input type="text" className="input" placeholder="Page's name" value={pageModal.page.name} />
                            <button className="button is-success">Save</button>
                        </div>
                        <div className="form">
                            <div className="button is-danger">Delete</div>
                        </div>
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
