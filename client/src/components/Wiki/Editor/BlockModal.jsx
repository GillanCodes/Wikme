import React, { useState } from 'react'
import { createBlock } from './blocks_ressources';

export default function BlockModal({setModal, pageId}) {

    const [imageSize, setImageSize] = useState(1);

    const addBlock = (type) => {
        setModal(0);
        if (type !== "images") return createBlock(type, pageId);

        if (type === "images") return createBlock(type, pageId, imageSize);
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

                            <div className="item">
                                <h2 className='title'>Images</h2>
                                <input type="range" max={4} min={1} value={imageSize} onChange={(e) => setImageSize(e.target.value)}/> <br />
                                <button className='button is-info' onClick={() => addBlock('images')}>Add {imageSize} images</button>
                            </div>

                            <div className="item" onClick={() => addBlock("code")}>
                                <h2 className='title'>Code Block</h2>
                                <p>Display code inside your wiki</p>
                            </div>
                            
                            <div className="item" onClick={() => addBlock('banner')}>
                                <h2 className='title'>Banner</h2>
                                <p>Add a full width image</p>
                            </div>

                            <div className="item" onClick={() => addBlock("text-banner")}>
                                <h2 className='title'>Text Banner</h2>
                                <p>Add a full width image with text</p>
                            </div>
                        </div> 

                    </div>
                    <div className="footer">
                        <button className='button is-link' onClick={() => setModal(0)}>Close</button>
                    </div>

                </div>
            </div>


        </div>
    )
}
