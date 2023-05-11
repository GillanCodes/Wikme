import React, { useEffect, useState } from 'react'
import { initPage, save } from './blocks';
import { isEmpty } from "../../../utils";
import Block from './Block';

import BlocksMenu from '../Menus/BlocksMenu';

import Modal from '../../Modules/Modal'
import UploadModal from '../Modals/UploadModal';
import BlockModal from './BlockModal'

export default function Editor({page}) {

    const [modal, setModal] = useState(0);

    const [load, setLoad] = useState(false);

    const [currentBlock, setCurrentBlock] = useState();
    const [imageKey, setImageKey] = useState();

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

    const fileHandle = (block) => {
        if (modal === 2) setModal(0);
        if (modal !== 2) {
            setModal(2); 
            setCurrentBlock(block);
        }
    }
        
    return (
        <>
        <div className="page">
            <div className='editor-container'>
                <div className="head">
                </div>
                <div className='content'>
                    <div className="editor">
                        <div className="editor-content" id="editor" onInput={changeHandle}>
                            {load && (
                                <>
                                    {page.content.map((item, key, arr) => {
                                        return (
                                            <div className='box' key={key}>
                                                <p className='block-nb'>#{key+1}</p>
                                                <Block block={item} fileHandle={() => fileHandle(item)} setImageKey={setImageKey} />
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
                    <Modal content={<UploadModal setModal={setModal} currentBlock={currentBlock} pageId={page._id} imageKey={imageKey} />} />
                )}

                

            </div>
        </div>
        <BlocksMenu page={page} />
        </>
    )
}
