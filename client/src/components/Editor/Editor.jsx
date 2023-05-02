import React, { useEffect, useState } from 'react'
import Modal from '../Modules/Modal'
import BlockModal from './BlockModal'
import { control, deleteBlock, displayWiki, save } from './blocks';
import { isEmpty } from "../../utils";

export default function Editor({page}) {

    const [modal, setModal] = useState(0);

    const [load, setLoad] = useState(false);

    useEffect(() => {
        displayWiki(page);
        if (!isEmpty(page))
        {
            setLoad(true)
        }
        // control();
    }, [page]);

    useEffect(() => {
        console.log('chnages')
    }, [document.getElementById('editor')])

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
                <h1>Editor</h1>
            </div>

            <div className='content'>
                <div className="editor">
                    <div className="editor-controls" id='controls'>
                        {load && (
                            <>
                                {control().map((item) => {
                                    if (!isEmpty(item.id))
                                    {
                                        return(
                                            <div className="controlBox">
                                                <button onClick={(e) => deleteHandle(page._id, item.id, e)}>Delete</button>
                                            </div>
                                        )
                                    }
                                    
                                })}
                            </>
                        )}
                    </div>
                    <div className="editor-content" id="editor" onInput={changeHandle}>
                        {/* <div className="block caption">
                            <div className="image-content">
                                <img src={`${process.env.PUBLIC_URL}/img_dev/caption.jpg`} alt="Caption" className='caption-image' />
                            </div>
                            <p className='caption-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt a velit doloremque iste ab excepturi repudiandae dolor, accusamus suscipit. Voluptas impedit nam reprehenderit nemo? Soluta voluptatem nulla quidem voluptatum magnam.</p>
                        </div>

                        <div className="block text">
                            <p><b>Lorem ipsum dolor</b>, sit amet consectetur adipisicing elit. Odit ipsa cupiditate ut id tempore suscipit fugiat iure repudiandae dignissimos, nisi iusto tempora nesciunt vero. Numquam dolorem laudantium eum. Aperiam, molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, totam fugit iste repellat assumenda accusamus ullam illum omnis error tempore itaque nisi quos unde numquam quo illo. Architecto, maiores atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse recusandae optio accusamus eum consectetur atque tempore asperiores. Possimus pariatur reprehenderit deserunt hic voluptas mollitia reiciendis quae dolore, doloremque unde nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit minus laboriosam velit magni labore optio error laborum nihil, voluptatem similique inventore ipsa molestias reiciendis repellendus unde! Dolores aspernatur quidem sequi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nostrum, quidem laborum, sequi dolorem atque reprehenderit dolor perferendis, quae illo molestias tempora blanditiis. Rerum, doloribus sapiente sit nostrum ex quam!</p>
                        </div>

                        <div className="block caption is-right is-centered">
                            <div className="image-content">
                                <img src={`${process.env.PUBLIC_URL}/img_dev/caption1.jpg`} alt="Caption" className='caption-image' />
                            </div>
                            <p className='caption-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt a velit doloremque iste ab excepturi repudiandae dolor, accusamus suscipit. Voluptas impedit nam reprehenderit nemo? Soluta voluptatem nulla quidem voluptatum magnam.</p>
                        </div>

                        <div className="block caption">
                            <div className="image-content">
                                <img src={`${process.env.PUBLIC_URL}/img_dev/caption2.jpg`} alt="Caption" className='caption-image' />
                            </div>
                            <p className='caption-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt a velit doloremque iste ab excepturi repudiandae dolor, accusamus suscipit. Voluptas impedit nam reprehenderit nemo? Soluta voluptatem nulla quidem voluptatum magnam.</p>
                        </div> */}
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
