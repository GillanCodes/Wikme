import React from 'react'

export default function BlockModal({setModal}) {
  return (
    <div className='block-adder'>

        <div className="block-adder-container">
            <div className="block-adder-content">
                <div className="head">
                    <h1>Add New Block</h1>
                </div>
                <div className="body">

                    <div className="item">
                        <h2>Text</h2>
                        <p>Just a text Box</p>
                    </div>

                    <div className="item">
                        <h2>Images Caption</h2>
                        <p>Text Box with a image on side</p>
                    </div>




                </div>
                <div className="footer">
                    <button onClick={() => setModal(0)}>Close</button>
                </div>

            </div>
        </div>


    </div>
  )
}
