import React from 'react'
import { createBlock } from './blocks';

export default function BlockModal({setModal, pageId}) {

    const addBlock = (type) => {
        setModal(0);
        createBlock(type, pageId);
    }

    return (
        <div className='block-adder'>

            <div className="block-adder-container">
                <div className="block-adder-content">
                    <div className="head">
                        <h1>Add New Block</h1>
                    </div>
                    <div className="body">

                    <div className="items">
                            <div className="item" id='title' onClick={() => addBlock("title")}>
                                <h2 className='title'>Title</h2>
                                <p>Bigger Text</p>
                            </div>

                            <div className="item" onClick={() => addBlock('subtitle')}>
                                <h2 className='title'>Sub Title</h2>
                                <p>A Smaller Text</p>
                            </div>
                            
                            <div className="item" id='text-only' onClick={() => addBlock("text-only")}>
                                <h2 className='title'>Text</h2>
                                <p>Just a text Box</p>
                            </div>

                            <div className="item" onClick={() => addBlock('caption')}>
                                <h2 className='title'>Caption</h2>
                                <p>Text Box with a image on side</p>
                            </div>

                            <div className="item" onClick={() => addBlock('caption-right')}>
                                <h2 className='title'>Caption Right</h2>
                                <p>Text Box with a image on Right side</p>
                            </div>
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
