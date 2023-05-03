import React, { useEffect, useRef, useState } from 'react'
import Modal from '../Modules/Modal'
import BlockModal from './BlockModal'
import { deleteBlock, initPage, save } from './blocks';
import { isEmpty } from "../../utils";
import Block from './Block';

export default function Editor({page}) {

    const [modal, setModal] = useState(0);

    const [load, setLoad] = useState(false);

    useEffect(() => {
        if (!isEmpty(page))
        {
            initPage(page.content);
            setLoad(true)
        }
    }, [page]);

    const changeHandle = () => {
        save(page._id)
    }

    const deleteHandle = (pageId, itemId, event) => {
        if (!isEmpty(itemId)){
            deleteBlock(itemId, pageId);
            event.target.remove();
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
                                        <>
                                            <Block block={item} />
                                            <div className="controls">
                                                <button className="control delete"><i class="fa-solid fa-trash"></i></button>
                                            </div>
                                        </>
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

        </div>
    )
}
