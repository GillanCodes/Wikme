import React, { useEffect, useRef, useState } from 'react'
import Modal from '../Modules/Modal'
import BlockModal from './BlockModal'
import { deleteBlock, initPage, save } from './blocks';
import { isEmpty } from "../../utils";
import Block from './Block';
import UploadModal from '../Uploads/UploadModal';

export default function Editor({page}) {

    const [modal, setModal] = useState(0);

    const [load, setLoad] = useState(false);

    const [currentBlock, setCurrentBlock] = useState();
    const [selcImage, setSelcImage] = useState();

    useEffect(() => {
        if (!isEmpty(page))
        {
            initPage(page.content);
            setLoad(true);
        }
    }, [page]);

    const changeHandle = () => {
        save(page._id)
    }

    const fileHandle = (blockId) => {
        if (modal === 2) setModal(0);
        if (modal !== 2) {
            setModal(2); 
            setCurrentBlock(blockId);
        }
    }
        
    return (
        <div className='editor-container'>
            <div className="head">
            </div>

            <div className='content'>
                <div className="editor">
                    <div className="editor-content" id="editor" onInput={changeHandle}>
                        {load && (
                            <>
                                {page.content.map((item) => {
                                    return (
                                        <div className='box'>
                                            <Block block={item} fileHandle={() => fileHandle(item.UId)} />
                                            <div className="controls-container">
                                                <div className="controls">
                                                    <button className="control delete" onClick={() => deleteBlock(item.UId, page._id)}><i class="fa-solid fa-trash"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </> 
                        )}
                    </div>

                    <div className="editor-content">
                        <div className="block new-block" onClick={() => setModal(1)}>
                            <p className='new-block-text'>Add a new block</p>
                        </div> 
                    </div>
                </div>
            </div>

            {modal === 1 && (
                <Modal content={<BlockModal setModal={setModal} pageId={page._id} />} />
            )}

            {modal === 2 && (
                <Modal content={<UploadModal setModal={setModal} currentBlock={currentBlock} pageId={page._id} />} />
            )}

        </div>
    )
}
